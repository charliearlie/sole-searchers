import styled from 'styled-components';

export const Sizes = styled.div`
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
