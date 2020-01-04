import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    grid-template-columns: 1fr;
  }

  img {
    height: 100%;
    object-fit: contain;
  }

  .image-container {
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;

    h2,
    h3 {
      margin: 0;
      opacity: 0.6;
    }

    h2 {
      opacity: 0.8;
    }
  }
  @media (max-width: ${({ theme }) => theme.ipadWidth}) {
    flex-direction: column;

    .image-container {
      max-width: 100%;
    }
  }
`;

export const DeliveryAndReturn = styled.a`
  color: ${({ theme }) => theme.softBlue};
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
`;
