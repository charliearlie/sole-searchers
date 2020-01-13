import styled from 'styled-components';
import useCurrency from '../../hooks/use-currency';

function CurrencySelector() {
  const currencies = ['GBP', 'EUR', 'USD', 'AUD']; // These will come from backend
  const [isMenuOpen, setMenuVisibility] = React.useState(false);
  const [currencyConfig, setCurrency] = useCurrency();

  const renderMenu = () => {
    if (!isMenuOpen) return null;

    const changeCurrency = currency => {
      setCurrency(currency);
      setMenuVisibility(false);
    };

    return (
      <Menu>
        {currencies.map(currency => (
          <button key={currency} onClick={() => changeCurrency(currency)}>
            {currency}
          </button>
        ))}
      </Menu>
    );
  };
  return (
    <>
      <button onClick={() => setMenuVisibility(!isMenuOpen)}>
        {currencyConfig.currency}
      </button>
      {renderMenu()}
    </>
  );
}

const Menu = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.bodyColour};
  border-radius: 3px;
  box-shadow: 0 5px 20px -5px rgba(32, 36, 46, 0.85);
  max-height: 140px;
  overflow: scroll;
  padding: 10px;
  top: 50px;
  width: 60px;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    border-bottom: 8px solid #ffffff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    box-shadow: 0 5px 20px -5px rgba(32, 36, 46, 0.85);
    height: 0;
    left: -18px;
    margin-left: 50%;
    transform: translateX(-50%);
    top: -8px;
    width: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
  }
`;

export default CurrencySelector;
