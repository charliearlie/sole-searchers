import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import { endpoint, prodEndpoint } from '../config';

import { LOCAL_STATE_QUERY } from '../components/basket/basket';

let apolloClient = null;

function create(initialState, cookie = null) {
  const cache = new InMemoryCache({
    cacheRedirects: {},
  });

  const request = async operation => {
    operation.setContext({
      headers: {
        Cookie: cookie,
      },
    });
  };

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Cookie: cookie,
      },
    };
  });

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle;
        Promise.resolve(operation)
          .then(oper => request(oper))
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );

  const isBrowser = typeof window !== 'undefined';
  const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    credentials: 'include',
    fetch: !isBrowser && fetch,
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    credentials: 'include',
    ssrMode: true,
    link: ApolloLink.from([
      requestLink,
      withClientState({
        defaults: {
          basketOpen: true,
        },
        resolvers: {
          Mutation: {
            toggleBasket: (_, variables, { cache }) => {
              const { basketOpen } = cache.readQuery({
                query: LOCAL_STATE_QUERY,
              });
              const data = {
                data: { basketOpen: !basketOpen },
              };
              cache.writeData(data);
              return data;
            },
          },
        },
        cache,
      }),
      new HttpLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        credentials: 'include',
        fetch: !isBrowser && fetch,
      }),
    ]),
    cache,
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    credentials: 'include',
    ssrMode: !isBrowser,
    resolvers: {},
    link: isBrowser ? authLink.concat(httpLink) : httpLink,
    cache: new InMemoryCache(), //.restore(initialState || {}),
    clientState: {
      resolvers: {},
      defaults: {
        basketOpen: true,
      },
    },
  });
}

export default function initApollo(initialState, cookie) {
  if (typeof window === 'undefined') {
    return create(initialState, cookie);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
