import styled from 'styled-components';

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

const Sizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  width: 100%;

  button {
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
    padding: 8px;
    transition: all 0.2s ease;
    width: 65px;

    &.selected,
    &:hover {
      border: 1px solid black;
    }
  }
`;

export default ItemSizes;
