import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { getItemPrice } from '../../services/item-service';
import useCurrency from '../../hooks/use-currency';

function ItemPreview(props) {
  const [currencyConfig] = useCurrency();
  return (
    <Link prefetch href={`/item/${props.item.slug}`}>
      <Preview>
        <img loading="lazy" src={props.item.previewImage} />
        <h4>{props.item.brand}</h4>
        <span className="title">{props.item.title}</span>
        <span>{getItemPrice(props.item.price, currencyConfig)}</span>
      </Preview>
    </Link>
  );
}

const Preview = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  transition: 0.2s ease;

  h4 {
    margin-top: 0;
    text-transform: uppercase;
  }
  img {
    padding: 10px;
    width: 100%;
    object-fit: contain;
  }

  .title {
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.05);
    .title {
      opacity: 1;
    }
  }
`;

export default ItemPreview;
