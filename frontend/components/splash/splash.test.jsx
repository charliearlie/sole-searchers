import { act, render } from '../../util/test-utils/with-providers';
import { MockedProvider } from '@apollo/react-testing';
import { GraphQLError } from 'graphql';
import Splash, { SPLASH_ITEMS_QUERY } from './splash';

const wait = require('waait');

const items = [
  {
    id: 'cjzsu2blwo4q90b53ruteqf8a',
    previewImage: 'previewimage.jpg',
    title: 'Off-White x Nike Air Force 1 MCA',
    splashImage: 'splash-image.jpg',
    slug: 'off-white-nike-air-force-1-MCA',
  },
];

const mocks = [
  {
    request: {
      query: SPLASH_ITEMS_QUERY,
    },
    result: {
      data: {
        items: items,
      },
    },
  },
];

describe('<Splash />', () => {
  // test('loading state', () => {
  //   const { getByTestId } = render(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <Splash />
  //     </MockedProvider>
  //   );

  //   expect(getByTestId('loading-spinner')).toBeInTheDocument();
  // });

  test("it renders a splash which is a link to the item's page", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Splash />
      </MockedProvider>
    );

    await act(() => wait(0));

    expect(container.firstChild.nodeName).toEqual('A');
    expect(container.firstChild).toHaveAttribute(
      'href',
      `item/${items[0].slug}`
    );
  });

  // test('it renders a title and the item name', async () => {
  //   const { getByText } = render(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <Splash />
  //     </MockedProvider>
  //   );

  //   await act(() => wait(0));

  //   // This won't be hardcoded when the backend is set up for splashes
  //   expect(getByText('Popular drops')).toBeInTheDocument();
  //   expect(getByText(items[0].title)).toBeInTheDocument();
  // });
});
