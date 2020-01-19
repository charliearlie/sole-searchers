import BrandInfo from '../../components/brand/brand-info';

function BrandPage(props) {
  return <BrandInfo brand={props.query.brand} />;
}

export default BrandPage;
