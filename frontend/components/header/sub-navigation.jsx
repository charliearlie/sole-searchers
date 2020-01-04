import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';

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

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: center;
  margin: auto;
  max-width: calc(${({ theme }) => theme.maxWidth} - 200px);
  overflow-x: auto;
  width: 100%;

  a {
    color: ${({ theme }) => theme.offWhite};
    font-size: 1.3rem;
    margin-right: 20px;
    opacity: 0.6;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    justify-content: flex-start;
    padding: 0 20px;

    a {
      &:last-of-type {
        margin-right: 20px;
      }
    }
  }
`;

export default SubNavigation;
