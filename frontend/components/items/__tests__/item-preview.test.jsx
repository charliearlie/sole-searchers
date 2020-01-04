import ItemPreview from '../item-preview';
import { render } from '../../../util/test-utils/with-providers';

const itemData = {
  brand: {
    name: 'Nike',
  },
  images:
    'https://res.cloudinary.com/recipeze/image/upload/v1566837816/Sole%20Searchers/img02.jpg',
  price: 120,
  slug: 'off-white-nike-air-force-1-MCA',
  title: 'Off-White x Nike Air Force 1 MCA',
};

describe('<ItemPreview />', () => {
  test("it should render the item's information", () => {
    const { getByText } = render(<ItemPreview item={itemData} />);

    expect(getByText(itemData.title)).toBeInTheDocument();
    expect(getByText(itemData.brand.name)).toBeInTheDocument();
    expect(getByText(`£${itemData.price}`)).toBeInTheDocument();
  });
});
