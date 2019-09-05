import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import LoadingSpinner from '../../components/loading-spinner';
import ItemInfo from '../../components/items/item-info';

const ITEM_QUERY = gql`
  query ITEM_QUERY($slug: String!) {
    item(where: { slug: $slug }) {
      brand
      images
      price
      title
    }
  }
`;

function ProductPage(props) {
  const { data, error, loading } = useQuery(ITEM_QUERY, {
    variables: { slug: props.query.slug },
  });

  if (loading) return <LoadingSpinner />;
  console.log(props);
  return <ItemInfo item={data.item} />;
}

export default ProductPage;
