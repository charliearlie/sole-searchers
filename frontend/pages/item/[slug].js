import ItemInfo from '../../components/items/item-info';

function ProductPage(props) {
  return <ItemInfo itemSlug={props.query.slug} />;
}

export default ProductPage;
