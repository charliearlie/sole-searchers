export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const currencyReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.currency;
    default:
      return '';
  }
};
