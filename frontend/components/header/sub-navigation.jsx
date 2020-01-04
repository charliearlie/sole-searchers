// External
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// Styles
import { Nav } from './styles/sub-navigation.styles';

export const POPULAR_BRANDS_QUERY = gql`
  query POPULAR_BRANDS_QUERY {
    brands(orderBy: popularity_DESC) {
      name
    }
  }
`;

const SubNavigation = () => {
  const { data, error, loading } = useQuery(POPULAR_BRANDS_QUERY);
  if (error) return <span>Error!!</span>;
  if (loading) return <span>Loading...</span>;
  const { brands } = data;
  return (
    <Nav>
      {brands.map(brand => (
        <Link key={brand.name} href={`/brand/${brand.name}`}>
          {brand.name}
        </Link>
      ))}
    </Nav>
  );
};

export default SubNavigation;
