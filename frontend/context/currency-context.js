import React from 'react';

// This will probably become a user context but for now only currency is needed
export const CurrencyContext = React.createContext();

// Should probably move this into the context folder
function CurrencyProvider(props) {
  const [cookies, setCookie] = useCookies([]);
  const userCurrency = cookies['currency'] || 'USD';
  const [currency, dispatch] = useReducer(currencyReducer, userCurrency);

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
