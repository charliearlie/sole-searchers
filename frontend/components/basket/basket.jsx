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

  const { basketOpen } = data;

  const handleButtonClick = () => {
    toggleBasket(!basketOpen);
  };
  return (
    <>
      <Button onClick={handleButtonClick}>Basket</Button>
      <StyledBasket open={basketOpen}>
        <BasketHeader />
        Basket
        <Button onClick={handleButtonClick}>Basket</Button>
      </StyledBasket>
    </>
  );
}

export default Basket;
