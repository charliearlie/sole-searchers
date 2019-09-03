import React from 'react';
import { useCookies } from 'react-cookie';
import { currencyReducer, CHANGE_CURRENCY, ADD_RATES } from './reducers';

// This will probably become a user context but for now only currency is needed
export const CurrencyContext = React.createContext();

function CurrencyProvider(props) {
  const [cookies, setCookie] = useCookies([]);
  const userCurrency = cookies['currency'] || 'USD';
  const [currency, dispatch] = React.useReducer(currencyReducer, {
    currency: userCurrency,
  });

  React.useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest?base=GBP')
      .then(resp => resp.json())
      .then(data => dispatch({ type: ADD_RATES, rates: data.rates }));
  }, []);

  const changeCurrency = currency => {
    setCookie('currency', currency);
    dispatch({ type: CHANGE_CURRENCY, currency });
  };

  return (
    <CurrencyContext.Provider value={{ currency, changeCurrency }} {...props}>
      {props.children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyProvider;
