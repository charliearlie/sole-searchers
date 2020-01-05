import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  background: ${({ theme }) => theme.bodyColour};
  z-index: 3;
  width: 100%;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19); */
  top: 0;
  height: 106px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  max-width: ${props => props.theme.maxWidth};
  margin: auto;

  .logo {
    color: ${props => props.theme.red};
    cursor: pointer;
    font-family: 'Anton', 'Sans-serif';
    font-size: 30px;
    letter-spacing: 1px;
    transform: skew(-5deg);
  }

  @media (max-width: 1100px) {
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    .logo {
      font-size: 15px;
      letter-spacing: 2px;
    }
  }
`;
