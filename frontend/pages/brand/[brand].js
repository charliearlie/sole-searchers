import BrandInfo from '../../components/brand/brand-info';

function BrandPage(props) {
  console.log(props.query.brand);
  return <BrandInfo brand={props.query.brand} />;
}

export default BrandPage;
