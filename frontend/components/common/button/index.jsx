import React from 'react';
import buttonMap from './button-map';

const Button = ({ buttonType, type, onClick, children, ...otherProps }) => {
  const ButtonWrapper = buttonMap[buttonType];
  console.log(otherProps);
  return (
    <ButtonWrapper onClick={onClick} type={type} {...otherProps}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
