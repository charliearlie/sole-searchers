import { act, render } from '../../../util/test-utils/with-providers';
import { MockedProvider } from '@apollo/react-testing';
import { GraphQLError } from 'graphql';
import ItemPreviewCollection from '../item-preview-collection';
import itemPreviewQueries from '../item-queries';

const wait = require('waait');

const returnedItems = [
  {
    id: 'ck047mnoyte1m0b53tf58kd4q',
    brand: 'Nike',
    title: 'The 10: Air Max 90 "Off White"',
    previewImage:
      'https://res.cloudinary.com/recipeze/image/upload/t_Site-preview/v1567537925/Sole%20Searchers/806237_01.jpg',
    price: 400,
    slug: 'off-white-nike-air-max-90-the-10',
    __typename: 'Item',
  },
  {
    id: 'ck047d81wtcjr0b5361bkfzez',
    brand: 'Adidas',
    title: 'Yeezy Boost 700 "Inertia"',
    previewImage:
      'https://res.cloudinary.com/recipeze/image/upload/t_Site-preview/v1567537370/Sole%20Searchers/135739_01.jpg',
    price: 250,
    slug: 'adidas-yeezy-boost-700-inertia',
    __typename: 'Item',
  },
  {
    id: 'ck04758w5ta700b53i8f7m29s',
    brand: 'Nike',
    title: "Air Max 1 SE 'Windbreaker'",
    previewImage:
      'https://res.cloudinary.com/recipeze/image/upload/t_Site-preview/v1567537024/Sole%20Searchers/147326_01.jpg',
    price: 245,
    slug: 'nike-air-max-1-SE-windbreaker',
    __typename: 'Item',
  },
  {
    id: 'ck047h8r1tdcx0b5348nftcfw',
    brand: 'Air Jordan',
    title: 'Air Jordan 4 Retro "Green Glow"',
    previewImage:
      'https://res.cloudinary.com/recipeze/image/upload/t_Site-preview/v1567537619/Sole%20Searchers/011792_01.jpg',
    price: 195,
    slug: 'air-jordan-4-retro-green-glow',
    __typename: 'Item',
  },
];

const mocks = [
  {
    request: {
      query: itemPreviewQueries.popular,
      variables: {
        first: 4,
      },
    },
    result: {
      data: {
        items: returnedItems,
      },
    },
  },
];

describe('<ItemPreviewCollection />', () => {
  test('It initially renders the loading spinner', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemPreviewCollection header="New arrivals" type="popular" />
      </MockedProvider>
    );
    const spinner = getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('It displays the header that is passed down as a prop', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemPreviewCollection header="Most Popular" type="popular" />
      </MockedProvider>
    );

    await act(() => wait(0));
    expect(getByText('Most Popular')).toBeInTheDocument();
  });

  test('It displays the 4 items returned from the query', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemPreviewCollection header="New arrivals" type="popular" />
      </MockedProvider>
    );

    await act(() => wait(0));
    returnedItems.forEach(item => {
      expect(getByText(item.title)).toBeInTheDocument();
      expect(getByText(`£${item.price}`)).toBeInTheDocument();
    });
  });

  test('it returns nothing when there is an error', async () => {
    const newMocks = Array.from(mocks);
    newMocks[0].error = [new GraphQLError('Error!')];

    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ItemPreviewCollection header="New arrivals" type="popular" />
      </MockedProvider>
    );

    await act(() => wait(0));

    expect(container.firstChild).toBeNull();
  });
});
