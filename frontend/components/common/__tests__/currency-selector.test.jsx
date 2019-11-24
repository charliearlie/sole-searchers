import CurrencySelector from '../currency-selector';
import {
  act,
  fireEvent,
  render,
} from '../../../util/test-utils/with-providers';

describe('<CurrencySelector />', () => {
  test('it should render a button with the current currency on display', () => {
    const { container, getByText } = render(<CurrencySelector />);
    expect(getByText('GBP')).toBeInTheDocument();
    expect(container.firstChild.nodeName).toEqual('BUTTON');
  });

  test('it should show a menu with all the avaialble currencies when clicked', () => {
    const currencies = ['GBP', 'USD', 'AUD', 'EUR'];
    const { container, getAllByText } = render(<CurrencySelector />);
    fireEvent.click(container.firstChild);

    currencies.forEach(
      currency =>
        expect(getAllByText(currency).length).toBeGreaterThanOrEqual(1) // We have to account for the button displaying a currency so there could be 2 occurrences
    );
  });

  test('it should change the currency when one is clicked in the menu', () => {
    const changeCurrency = jest.fn();
    const { container, getByText, queryByText } = render(<CurrencySelector />, {
      changeCurrency,
    });

    expect(queryByText('USD')).toBeNull();
    fireEvent.click(container.firstChild);

    const usDollars = getByText('USD');
    expect(usDollars).toBeInTheDocument();

    fireEvent.click(usDollars);
    expect(changeCurrency).toHaveBeenCalled();
    expect(changeCurrency).toHaveBeenCalledWith('USD');
  });
});
