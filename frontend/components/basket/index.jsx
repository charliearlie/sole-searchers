import React from 'react';
import styled from 'styled-components';

// This just says basket until I sort out svgs in Jest
function Basket() {
  return <Button>Basket</Button>;
}

const Button = styled.button`
  height: 20px;
  width: 20px;
`;

export default Basket;
