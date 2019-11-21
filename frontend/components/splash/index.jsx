import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useNetworkStatus } from '../../hooks/adaptive-hooks';
import Button from '../common/button';
import LoadingSpinner from '../loading-spinner';

const SPLASH_ITEMS_QUERY = gql`
  query SPLASH_ITEMS_QUERY {
    items(where: { splashImage_not: "" }) {
      id
      darkImage
      previewImage
      title
      splashImage
      slug
    }
  }
`;

function Splash(props) {
  const { data, error, loading } = useQuery(SPLASH_ITEMS_QUERY);
  const { networkStatus } = useNetworkStatus();
  if (loading) return <LoadingSpinner />;

  if (!data.items) return null;

  let imageSrc;

  const splashItem = data.items[0];

  switch (networkStatus) {
    case 'slow-2g':
    case '2g':
      imageSrc = splashItem.previewImage;
      break;
    default:
      imageSrc = splashItem.splashImage;
      break;
  }

  imageSrc = props.prefersDarkMode ? splashItem.darkImage : imageSrc;

  return (
    <SplashWrapper href={`item/${splashItem.slug}`}>
      <div className="info">
        <h1>Popular drops</h1>
        <h2>{splashItem.title}</h2>
        <Button padding={25} borderRadius={0} buttonType="secondary">
          SHOP NOW
        </Button>
      </div>
      <div className="image-container">
        {<img loading="lazy" src={imageSrc} />}
      </div>
    </SplashWrapper>
  );
}

const SplashWrapper = styled.a`
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

export default Splash;
