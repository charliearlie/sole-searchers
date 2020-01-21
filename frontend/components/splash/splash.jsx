// External
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// Components
import Button from '../common/button';
import LoadingSpinner from '../loading-spinner';

// Styles
import { Shoe, SplashWrapper } from './styles/splash.styles';
export const SPLASH_ITEMS_QUERY = gql`
  query SPLASH_ITEMS_QUERY {
    items(where: { splashImage_not: "" }) {
      id
      previewImage
      title
      splashImage
      slug
    }
  }
`;

function Splash(props) {
  const { data, error, loading } = useQuery(SPLASH_ITEMS_QUERY);
  if (loading) return <p>Loading..</p>;

  if (error) {
    return <p>Error...</p>;
  }

  if (!data.items) return null;

  const splashItem = data.items[0];

  return (
    <SplashWrapper href={`item/${splashItem.slug}`}>
      <div className="image-container">
        <p>Featured crep</p>
        <h2>{splashItem.title}</h2>
        <img
          alt={`splash image of ${splashItem.title}`}
          loading="lazy"
          src={splashItem.splashImage}
        />
      </div>
    </SplashWrapper>
  );
}

export default Splash;
