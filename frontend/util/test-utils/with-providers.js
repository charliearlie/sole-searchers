import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { CurrencyContext } from '../../context/currency-context';

const rates = {
  AUD: 1.894277739,
  EUR: 1.163061177,
  GBP: 1,
  USD: 1.2861130495,
};

const theme = {
  bodyColour: '#fff',
  fontColour: '#000',
  red: '#E44847',
  moderateRed: '#D46F58',
  black: '#393939',
  darkBlue: '#2B3B4C',
  orange: '#E4964D',
  yellow: '#F2CA59',
  grey: '#3A3A3A',
  darkGreyishCyan: '#92A7AA',
  lightGrey: '#E1E1E1',
  lighterGrey: '#E0E0E0',
  offWhite: '#EDEDED',
  softBlue: '#68b2fc',
  maxWidth: '1100px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  spacingUnit: '0.8rem',
  spacingUnits: num => `${0.8 * num}rem`,
  mobileWidth: '600px',
  ipadWidth: '1024px',
};

function renderWithProviders(ui, data) {
  return render(
    <ThemeProvider theme={theme}>
      <CurrencyContext.Provider
        value={{
          currency: {
            currency: (data && data.currency) || 'GBP',
            rates: data && data.rates ? { ...rates, ...data.rates } : rates, //This sickens me
          },
          changeCurrency: data && data.changeCurrency,
        }} // This needs to be changeable
      >
        {ui}
      </CurrencyContext.Provider>
    </ThemeProvider>
  );
}

// Here we are exposing the whole API of React Testing Library and replacing it's render
// with our own. Now all usage of this render will automatically wrap components with
// the Baobab context
export * from '@testing-library/react';
export { renderWithProviders as render };
