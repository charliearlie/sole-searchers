import gql from 'graphql-tag';

const ITEMS_QUERY = gql`
  query ITEMS_QUERY($first: Int) {
    items(first: $first) {
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

const POPULAR_ITEMS_QUERY = gql`
  query ITEMS_QUERY($first: Int) {
    items(first: $first, orderBy: popularity_DESC) {
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

const itemsQueryMap = {
  newest: ITEMS_QUERY,
  popular: POPULAR_ITEMS_QUERY,
};

export default itemsQueryMap;
