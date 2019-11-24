import styled from 'styled-components';
import Link from 'next/link';
import {
  getItemPrice,
  appendCurrencySymbol,
} from '../../services/item-service';
import useCurrency from '../../hooks/use-currency';

function ItemFinance({ financeDuration = 12, price }) {
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
}

const Price = styled.span`
  font-weight: bold;
`;

const Credit = styled.a`
  color: ${({ theme }) => theme.softBlue};
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;
`;

export default ItemFinance;
