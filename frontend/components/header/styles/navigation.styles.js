import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 10px 0;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19); */

  > * {
    color: ${({ theme }) => theme.fontColour};
    font-size: 1.2rem;
    margin-right: 16px;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.fontColour};
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  @media (max-width: 600px) {
    align-items: center;
    button {
      height: 18px;
      width: 18px;
    }
  }
`;

export const Line = styled.span`
  background-color: black;
  margin-bottom: 4px;
  margin-top: 4px;
  opacity: 0.7;
  width: 2px;

  @media (max-width: 600px) {
    display: none;
  }
`;
