// Components
import Basket from '../basket';
import CurrencySelector from '../common/currency-selector';

// Styles
import { Line, Nav } from './styles/navigation.styles';

const Navigation = (): JSX.Element => {
  return (
    <Nav>
      <CurrencySelector />
      <a href="#">Login / Register</a>
      <Line />
      <Basket />
    </Nav>
  );
};

export default Navigation;
