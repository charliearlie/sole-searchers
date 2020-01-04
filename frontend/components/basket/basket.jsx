import React from 'react';

import BasketHeader from './basket-header';

import { Button, StyledBasket } from './styles/basket.styles';

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

export default Basket;
