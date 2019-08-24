import CurrencyProvider from '../context/currency-context';

function GlobalState(props) {
  return <CurrencyProvider>{props.children}</CurrencyProvider>;
}

export default GlobalState;
