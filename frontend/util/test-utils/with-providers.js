import { render } from '@testing-library/react';
import { CurrencyContext } from '../../context/currency-context';

const rates = {
  AUD: 1.894277739,
  EUR: 1.163061177,
  GBP: 1,
  USD: 1.2861130495,
};

function renderWithProviders(ui, data) {
  return render(
    <CurrencyContext.Provider
      value={{
        currency: {
          currency: (data && data.currency) || 'GBP',
          rates: data && data.rates ? { ...rates, ...data.rates } : rates, //This sickens me
        },
        changeCurrency: jest.fn(),
      }} // This needs to be changeable
    >
      {ui}
    </CurrencyContext.Provider>
  );
}

// Here we are exposing the whole API of React Testing Library and replacing it's render
// with our own. Now all usage of this render will automatically wrap components with
// the Baobab context
export * from '@testing-library/react';
export { renderWithProviders as render };
