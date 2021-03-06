import { act, render } from '../../../util/test-utils/with-providers';
import { MockedProvider } from '@apollo/react-testing';
import { GraphQLError } from 'graphql';
import ItemInfo, { ITEM_QUERY } from '../item-info';

const wait = require('waait');

const itemData = {
  brand: {
    name: 'Nike',
  },
  images:
    'https://res.cloudinary.com/recipeze/image/upload/v1566837816/Sole%20Searchers/img02.jpg',
  price: 120,
  title: 'Off-White x Nike Air Force 1 MCA',
};

const mocks = [
  {
    request: {
      query: ITEM_QUERY,
      variables: {
        slug: 'off-white-nike-air-force-1-MCA',
      },
    },
    result: {
      data: {
        item: { ...itemData },
      },
    },
  },
];

describe('<ItemInfo />', () => {
  test('It initially renders the loading spinner', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemInfo itemSlug="off-white-nike-air-force-1-MCA" />
      </MockedProvider>
    );
    const spinner = getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
  });

  test("It displays the item's information after load", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemInfo itemSlug="off-white-nike-air-force-1-MCA" />
      </MockedProvider>
    );
    await act(() => wait(0));
    expect(getByText(itemData.title)).toBeInTheDocument();
  });

  test('It displays the price in pounds', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemInfo itemSlug="off-white-nike-air-force-1-MCA" />
      </MockedProvider>
    );
    await act(() => wait(0));
    expect(getByText(`£${itemData.price}`)).toBeInTheDocument();
  });

  test("It displays the price in dollars if the user's currency is Dollars", async () => {
    const newMocks = Array.from(mocks);
    newMocks[0].result.data = null;
    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemInfo itemSlug="off-white-nike-air-force-1-MCA" />
      </MockedProvider>,
      { currency: 'USD' }
    );
    await act(() => wait(0));
    expect(queryByText('$154')).toBeNull();
  });

  test('It displays a header if there is an error', async () => {
    const newMocks = Array.from(mocks);
    newMocks[0].error = [new GraphQLError('Error!')];
    const { getByText } = render(
      <MockedProvider mocks={newMocks} addTypename={false}>
        <ItemInfo itemSlug="off-white-nike-air-force-1-MCA" />
      </MockedProvider>
    );
    await act(() => wait(0));
    expect(getByText(`Something went wrong`)).toBeInTheDocument();
  });
});
