import React from 'react';
import styled from 'styled-components';

import BasketHeader from './basket-header';

// This just says basket until I sort out svgs in Jest
function Basket() {
  const [basketOpen, setBasketOpen] = React.useState(false);

  const handleButtonClick = () => {
    setBasketOpen(!basketOpen);
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

const Button = styled.button`
  height: 20px;
  width: 20px;
`;
const StyledBasket = styled.div`
  display: flex;
  position: fixed;
  background: white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16), 0 4px 10px 0 rgba(0, 0, 0, 0.23);
  flex-direction: column;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
  right: 0;
  width: 500px;
  z-index: 30;
  transition: all 0.3s ease-in;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
`;

export default Basket;
