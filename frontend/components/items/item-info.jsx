import styled from 'styled-components';
import { getItemPrice } from '../../services/item-service';
import useCurrency from '../../hooks/use-currency';

function ItemInfo(props) {
  const [currencyConfig] = useCurrency();
  return (
    <Wrapper>
      <div className="image-container">
        <img src={props.item.images} />
      </div>
      <div className="info">
        <h3>{props.item.brand}</h3>
        <h2>{props.item.title}</h2>
        <span>{getItemPrice(props.item.price, currencyConfig)}</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  img {
    height: 100%;
    object-fit: contain;
  }

  .image-container {
    flex-grow: 2;
    max-width: 66%;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;

    h2,
    h3 {
      margin-bottom: 5px;
    }

    h2 {
      margin-top: 5px;
    }
  }
  @media (max-width: ${({ theme }) => theme.ipadWidth}) {
    flex-direction: column;

    .image-container {
      max-width: 100%;
    }
  }
`;

export default ItemInfo;
