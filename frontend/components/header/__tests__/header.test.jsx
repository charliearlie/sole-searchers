import { MockedProvider } from '@apollo/react-testing';
import { GraphQLError } from 'graphql';
import { POPULAR_BRANDS_QUERY } from '../sub-navigation';
import { LOCAL_STATE_QUERY } from '../../basket/basket';
import { act, render } from '../../../util/test-utils/with-providers';
import Header from '../header';

const wait = require('waait');

const brands = [
  {
    name: 'Nike',
  },
  {
    name: 'Adidas',
  },
  {
    name: 'Puma',
  },
  {
    name: 'Fila',
  },
  {
    name: 'Reebok',
  },
  {
    name: 'Vans',
  },
  {
    name: 'Air Jordan',
  },
  {
    name: 'Converse',
  },
  {
    name: 'Yeezy',
  },
];

const mocks = [
  {
    request: {
      query: POPULAR_BRANDS_QUERY,
    },
    result: {
      data: {
        brands: brands,
      },
    },
  },
  {
    request: {
      query: LOCAL_STATE_QUERY,
    },
    result: {
      data: {
        basketOpen: false,
      },
    },
  },
];

const resolvers = {
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
};

describe('Header', () => {
  test('it should render the site title', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} resolvers={resolvers} addTypename={false}>
        <Header />
      </MockedProvider>
    );
    expect(getByText('Sole Searchers')).toBeInTheDocument();
  });

  test('it should render a login button', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} resolvers={resolvers} addTypename={false}>
        <Header />
      </MockedProvider>
    );
    expect(getByText('Login / Register')).toBeInTheDocument();
  });

  test('it should render the currency selector', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} resolvers={resolvers} addTypename={false}>
        <Header />
      </MockedProvider>
    );
    expect(getByText('GBP')).toBeInTheDocument();
  });

  test('it initially renders loading... on the sub nav', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} resolvers={resolvers} addTypename={false}>
        <Header />
      </MockedProvider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('it renders a list of brands', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} resolvers={resolvers} addTypename={false}>
        <Header />
      </MockedProvider>
    );

    await act(() => wait(0));
    brands.forEach(brand => expect(getByText(brand.name)).toBeInTheDocument());
  });

  test('it handles an error', async () => {
    const newMocks = Array.from(mocks);
    newMocks[0].error = [new GraphQLError('Error!')];

    const { getByText } = render(
      <MockedProvider
        mocks={newMocks}
        resolvers={resolvers}
        addTypename={false}
      >
        <Header />
      </MockedProvider>
    );

    await act(() => wait(0));
    expect(getByText('Error!!')).toBeInTheDocument();
  });
});
