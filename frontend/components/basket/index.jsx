import React from 'react';
import styled from 'styled-components';
import BasketIcon from '../../assets/svg/basket.svg';

function Basket() {
  return (
    <Button>
      <BasketIcon />
    </Button>
  );
}

const Button = styled.button`
  height: 20px;
  width: 20px;
`;

export default Basket;
