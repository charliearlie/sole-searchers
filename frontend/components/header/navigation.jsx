import React from 'react';
import styled from 'styled-components';
import Basket from '../../assets/svg/basket.svg';

const Navigation = () => {
  return (
    <Nav>
      <a href="#">Currency</a>
      <a href="#">Login / Register</a>
      <Line />
      <button>
        <Basket />
      </button>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  padding: 10px 0;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19); */

  > * {
    color: ${({ theme }) => theme.black};
    font-size: 1.2rem;
    margin-right: 16px;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    height: 24px;
    outline: none;
    padding: 0;
    width: 24px;
  }
`;

const Line = styled.span`
  background-color: black;
  margin-bottom: 4px;
  margin-top: 4px;
  opacity: 0.7;
  width: 2px;
`;
