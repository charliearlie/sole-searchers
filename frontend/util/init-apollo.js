import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { setContext } from 'apollo-link-context';
import { endpoint, prodEndpoint } from '../config';

let apolloClient = null;

function create(initialState, cookie = null) {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Cookie: cookie,
      },
    };
  });

  const isBrowser = typeof window !== 'undefined';
  const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    credentials: 'include',
    fetch: !isBrowser && fetch,
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    credentials: 'include',
    ssrMode: !isBrowser,
    link: isBrowser ? authLink.concat(httpLink) : httpLink,
    cache: new InMemoryCache(), //.restore(initialState || {}),
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
