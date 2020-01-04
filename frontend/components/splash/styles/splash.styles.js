import styled from 'styled-components';

export const SplashWrapper = styled.a`
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.fontColour};
  max-height: 600px;
  padding: 15px;
  text-decoration: none;
  width: 100%;

  .image-container {
    flex-grow: 2;
    max-width: 66%;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${({ theme }) => theme.fontColour};
      font-weight: 900;
      text-transform: uppercase;
    }

    h2 {
      color: ${({ theme }) => theme.fontColour};
      font-weight: normal;
      margin-top: 0;
    }

    button {
      letter-spacing: 1.4px;
      width: 50%;
    }
  }

  @media (max-width: ${({ theme }) => theme.ipadWidth}) {
    flex-direction: column-reverse;
    justify-content: center;

    .image-container {
      height: 400px;
      max-width: 100%;
    }

    .info {
      width: 100%;
    }
  }
`;
