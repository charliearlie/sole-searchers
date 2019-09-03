import gql from 'graphql-tag';

const ITEMS_QUERY = gql`
  query ITEMS_QUERY($first: Int) {
    items(first: $first) {
      id
      brand
      title
      previewImage
      price
    }
  }
`;

const POPULAR_ITEMS_QUERY = gql`
  query ITEMS_QUERY($first: Int) {
    items(first: $first, orderBy: popularity_DESC) {
      id
      brand
      title
      previewImage
      price
    }
  }
`;

const itemsQueryMap = {
  newest: ITEMS_QUERY,
  popular: POPULAR_ITEMS_QUERY,
};

export default itemsQueryMap;