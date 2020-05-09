// External
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Components
import Button from '../common/button';
import ItemFinance from './item-finance';
import ItemSizes from './item-sizes';
import LoadingSpinner from '../loading-spinner';

// Styles
import { Wrapper, DeliveryAndReturn } from './styles/item-info.styles';

export const ITEM_QUERY = gql`
  query ITEM_QUERY($slug: String!) {
    item(where: { slug: $slug }) {
      brand {
        name
      }
      images
      price
      title
    }
  }
`;

function ItemInfo({ itemSlug }) {
  const { data, error, loading } = useQuery(ITEM_QUERY, {
    variables: { slug: itemSlug },
  });

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  if (loading) return <LoadingSpinner />;

  if (data) {
    const { item } = data;
    return (
      <Wrapper>
        <Head>
          <title>{item.title}</title>
        </Head>
        <div className="image-container">
          <img alt={`Image of ${item.title}`} src={item.images} />
        </div>
        <div className="info">
          <h3>{item.brand.name}</h3>
          <h2>{item.title}</h2>
          <ItemFinance price={item.price} />
          <Link href="/deliveries-and-returns">
            <DeliveryAndReturn>Delivery & return</DeliveryAndReturn>
          </Link>
          <ItemSizes />
          <Button padding={15} borderRadius={0} buttonType="secondary">
            ADD TO BASKET
          </Button>
        </div>
      </Wrapper>
    );
  }
  return null;
}

export default ItemInfo;
