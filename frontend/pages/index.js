import Register from '../components/authentication/register';
import useCurrency from '../hooks/use-currency';
import Splash from '../components/splash';
import ItemPreviewCollection from '../components/items/item-preview-collection';
import useMedia from 'use-media-hook';
const Home = props => {
  const device = useMedia(true);
  return (
    <div>
      <Splash />
      <ItemPreviewCollection header="New arrivals" type="newest" />
      <ItemPreviewCollection header="Most Popular" type="popular" />
    </div>
  );
};

export default Home;
