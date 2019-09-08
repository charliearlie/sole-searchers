export const getItemPrice = (
  priceInPounds,
  currencyConfig,
  withSymbol = true
) => {
  if (!currencyConfig.rates) return priceInPounds;
  const { currency, rates } = currencyConfig;

  return !withSymbol
    ? Math.floor(rates[currency] * priceInPounds)
    : appendCurrencySymbol(
        Math.floor(rates[currency] * priceInPounds),
        currency
      );
};

export const appendCurrencySymbol = (price, currency) => {
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
