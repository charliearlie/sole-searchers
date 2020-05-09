// External
import Link from 'next/link';

// Services
import {
  getItemPrice,
  appendCurrencySymbol,
} from '../../services/item-service';

// Hooks
import useCurrency from '../../hooks/use-currency';

// Styles
import { Credit, Price } from './styles/item-finance.styles';

interface ItemFinanceProps {
  financeDuration: number;
  price: number;
}

const ItemFinance: React.FC<ItemFinanceProps> = ({
  financeDuration = 12,
  price,
}): JSX.Element => {
  const [currencyConfig] = useCurrency();
  const getItemMonthlyPayments = (price, duration = 12) => {
    const monthlyPrice = appendCurrencySymbol(
      Math.ceil(price / duration),
      currencyConfig.currency
    );
    return (
      <Link href="#">
        <Credit>{`Qualify for credit from ${monthlyPrice} a month`}</Credit>
      </Link>
    );
  };

  return (
    <>
      <Price>{getItemPrice(price, currencyConfig)}</Price>
      {getItemMonthlyPayments(
        getItemPrice(price, currencyConfig, false),
        financeDuration
      )}
    </>
  );
};

export default ItemFinance;
