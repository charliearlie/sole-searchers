// External
import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Components
import BasketHeader from './basket-header';

// Styles
import { Button, StyledBasket } from './styles/basket.styles';

export const LOCAL_STATE_QUERY = gql`
  query {
    basketOpen @client
  }
`;

export const TOGGLE_BASKET_MUTATION = gql`
  mutation {
    toggleBasket @client
  }
`;

function Basket() {
  const { data, error, loading } = useQuery(LOCAL_STATE_QUERY);
  const [toggleBasket, { mutationError, mutationLoading }] = useMutation(
    TOGGLE_BASKET_MUTATION
  );

  // Temporary until I work out client directives in mocked client side queries
  const isBasketOpen = data && data.basketOpen;

  const handleButtonClick = () => {
    toggleBasket(!isBasketOpen);
  };
  return (
    <>
      <Button onClick={handleButtonClick}>Basket</Button>
      <StyledBasket open={isBasketOpen}>
        <BasketHeader />
        Basket
        <Button onClick={handleButtonClick}>Basket</Button>
      </StyledBasket>
    </>
  );
}

export default Basket;
