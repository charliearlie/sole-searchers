import { Sizes } from './styles/item-sizes.styles';

function ItemSizes(props) {
  const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <>
      <h3>UK Sizes</h3>
      <Sizes>
        {sizes.map(size => {
          const styles = size === 10 ? 'selected' : '';
          return (
            <button className={styles} key={size}>
              {size}
            </button>
          );
        })}
      </Sizes>
    </>
  );
}

export default ItemSizes;
