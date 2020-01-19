import styled from 'styled-components';

export const SplashWrapper = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.fontColour};
  margin-top: 105px;
  text-decoration: none;
  width: 100%;

  .image-container {
    background: #634c96;
    flex-grow: 2;
    height: 600px;
    max-width: 100%;
    padding-top: 20px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      transform: rotate(30deg) scale(1) translateY(-132px) translateX(30px);
      transition: 0.2s ease;
    }

    h2 {
      display: flex;
      font-size: 40px;
      color: white;
      font-weight: bold;
      justify-content: center;
      margin: 0;
      width: 100%;
    }

    p {
      display: flex;
      font-size: 12px;
      color: white;
      font-weight: bold;
      justify-content: center;
      margin: 0;
      opacity: 0.8;
      width: 100%;
    }
  }

  h1 {
    color: ${({ theme }) => theme.fontColour};
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
    transform: rotate(-90deg);
  }

  @media (max-width: ${({ theme }) => theme.ipadWidth}) {
    flex-direction: column-reverse;
    justify-content: center;

    .image-container {
      img {
        transform: rotate(30deg) scale(1) translateY(-132px) translateX(-20px);
        transition: 0.2s ease;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    flex-direction: column-reverse;
    justify-content: center;

    .image-container {
      height: 350px;
      img {
        transform: rotate(30deg) scale(1) translateY(-35px) translateX(30px);
        transition: 0.2s ease;
      }

      h2 {
        font-size: 20px;
      }
    }
  }
`;
