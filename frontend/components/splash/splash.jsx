// External
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// Components
import Button from '../common/button';
import LoadingSpinner from '../loading-spinner';

// Styles
import { SplashWrapper } from './styles/splash.styles';
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
  if (loading) return <LoadingSpinner />;

  if (error) {
    return <p>Error...</p>;
  }

  if (!data.items) return null;

  const splashItem = data.items[0];

  return (
    <SplashWrapper href={`item/${splashItem.slug}`}>
      <div className="info">
        <h1>Popular drops</h1>
        <h2>{splashItem.title}</h2>
        <Button borderRadius={0} buttonType="secondary">
          SHOP NOW
        </Button>
      </div>
      <div className="image-container">
        {
          <img
            alt={`splash image of ${splashItem.title}`}
            loading="lazy"
            src={splashItem.splashImage}
          />
        }
      </div>
    </SplashWrapper>
  );
}

export default Splash;
