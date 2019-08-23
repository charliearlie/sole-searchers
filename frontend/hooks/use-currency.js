import React from 'react';
import { CurrencyContext } from '../context/currency-context';

function useCurrency() {
  const context = React.useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a User Provider`);
  }
  return [context.currency, context.changeCurrency];
}

export default useCurrency;
