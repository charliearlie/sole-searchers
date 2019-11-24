import ItemFinance from '../item-finance';
import { render } from '../../../util/test-utils/with-providers';

describe('<ItemFinance />', () => {
  test('it should render the price of the item in the selected currency [GBP]', () => {
    const { getByText } = render(<ItemFinance price={120} />);

    expect(getByText('£120')).toBeInTheDocument();
  });

  test('it should render the price of the item in the selected currency [USD]', () => {
    const { getByText } = render(<ItemFinance price={120} />, {
      currency: 'USD',
    });

    expect(getByText('$154')).toBeInTheDocument();
  });

  test('it should render the price of the item in the selected currency [AUD]', () => {
    const { getByText } = render(<ItemFinance price={120} />, {
      currency: 'AUD',
    });

    expect(getByText('$227')).toBeInTheDocument();
  });

  test('it should render the price of the item in the selected currency [EUR]', () => {
    const { getByText } = render(<ItemFinance price={120} />, {
      currency: 'EUR',
    });

    expect(getByText('139€')).toBeInTheDocument();
  });

  test('it should show us the financial installments as the price divided by 12 by default', () => {
    const price = 120;
    const { getByText } = render(<ItemFinance price={price} />);

    expect(
      getByText(`Qualify for credit from £${price / 12} a month`)
    ).toBeInTheDocument();
  });

  test('it should show us the financial installments as the price divided by the financeDuration prop', () => {
    const price = 120;
    const financeDuration = 3;
    const { getByText } = render(
      <ItemFinance financeDuration={financeDuration} price={price} />
    );

    expect(
      getByText(`Qualify for credit from £${price / financeDuration} a month`)
    ).toBeInTheDocument();
  });

  test('it should show us the financial installments when using different currencies', () => {
    const { getByText } = render(
      <ItemFinance price={120} financeDuration={2} />,
      {
        currency: 'USD',
      }
    );

    expect(
      getByText(`Qualify for credit from $77 a month`)
    ).toBeInTheDocument();
  });
});
