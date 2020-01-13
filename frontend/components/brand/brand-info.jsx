import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LoadingSpinner from '../loading-spinner';
import ItemPreview from '../items/item-preview';

import { BrandInfoWrapper } from './styles/brand-info.styles';

const BRAND_QUERY = gql`
  query BRAND_QUERY($name: String!) {
    brand(where: { name: $name }) {
      logo
      name
      popularity
      website
    }
  }
`;

const ITEM_BRAND_QUERY = gql`
  query ITEM_BRAND_QUERY($brand: String!) {
    items(where: { brand: { name: $brand } }) {
      id
      brand {
        name
      }
      title
      previewImage
      price
      slug
    }
  }
`;
function BrandInfo(props) {
  const { data, error, loading } = useQuery(ITEM_BRAND_QUERY, {
    variables: { brand: props.brand },
  });

  if (loading) return <LoadingSpinner />;

  if (error) return <p>Error</p>;

  return (
    <>
      <h1>{data.items[0].brand.name}</h1>
      <BrandInfoWrapper>
        {data.items &&
          data.items.map(item => <ItemPreview key={item.title} item={item} />)}
      </BrandInfoWrapper>
    </>
  );
}

export default BrandInfo;
