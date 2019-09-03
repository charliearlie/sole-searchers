export const getItemPrice = (priceInPounds, currencyConfig) => {
  if (!currencyConfig.rates) return priceInPounds;
  const { currency, rates } = currencyConfig;

  return appendCurrencySymbol(
    Math.floor(rates[currency] * priceInPounds),
    currency
  );
};

const appendCurrencySymbol = (price, currency) => {
  const symbolMap = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    AUD: '$',
  };

  if (currency === 'EUR') {
    return `${price}${symbolMap[currency]}`;
  }

  return `${symbolMap[currency]}${price}`;
};
