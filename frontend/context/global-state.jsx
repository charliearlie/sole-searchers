import { CurrencyProvider } from '../hooks/use-currency';

function GlobalState(props) {
  return <CurrencyProvider>{props.children}</CurrencyProvider>;
}

export default GlobalState;
