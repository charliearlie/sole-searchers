import styled from 'styled-components';

const SubNavigation = () => (
  <Nav>
    <a href="#">Nike</a>
    <a href="#">Adidas</a>
    <a href="#">Reebok</a>
    <a href="#">Puma</a>
    <a href="#">Air Jordan</a>
    <a href="#">Fila</a>
    <a href="#">Converse</a>
    <a href="#">Vans</a>
    <a href="#">Yeezy</a>
  </Nav>
);

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
    margin-right: 15px;
    opacity: 0.6;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default SubNavigation;
