import styled from 'styled-components';
import Link from 'next/link';
import Button from '../common/button';
import ItemFinance from './item-finance';

function ItemInfo({ item }) {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={item.images} />
      </div>
      <div className="info">
        <h3>{item.brand}</h3>
        <h2>{item.title}</h2>
        <ItemFinance price={item.price} />
        <Link href="/deliveries-and-returns">
          <DeliveryAndReturn>Delivery & return</DeliveryAndReturn>
        </Link>
        <Button padding={15} borderRadius={0} buttonType="secondary">
          ADD TO CART
        </Button>
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
      margin: 0;
      opacity: 0.6;
    }

    h2 {
      opacity: 0.8;
    }
  }
  @media (max-width: ${({ theme }) => theme.ipadWidth}) {
    flex-direction: column;

    .image-container {
      max-width: 100%;
    }
  }
`;

const DeliveryAndReturn = styled.a`
  color: ${({ theme }) => theme.softBlue};
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
`;

export default ItemInfo;
