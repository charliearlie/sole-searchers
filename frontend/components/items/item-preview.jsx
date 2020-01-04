// External
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

// Services
import { getItemPrice } from '../../services/item-service';

// Hooks
import useCurrency from '../../hooks/use-currency';

// Styles
import { Preview } from './styles/item-preview.styles';

function ItemPreview(props) {
  const [currencyConfig] = useCurrency();
  return (
    <Link prefetch href={`/item/${props.item.slug}`}>
      <Preview>
        <LazyLoad height={200}>
          <img loading="lazy" src={props.item.previewImage} />
        </LazyLoad>

        <h4>{props.item.brand.name}</h4>
        <span className="title">{props.item.title}</span>
        <span>{getItemPrice(props.item.price, currencyConfig)}</span>
      </Preview>
    </Link>
  );
}

export default ItemPreview;
