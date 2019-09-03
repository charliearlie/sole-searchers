export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const ADD_RATES = 'ADD_RATES';

export const currencyReducer = (
  state = { currency: '', rates: [] },
  action
) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return { ...state, currency: action.currency };
    case ADD_RATES:
      return { ...state, rates: action.rates };
    default:
      return { ...state };
  }
};
