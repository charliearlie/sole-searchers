import styled from 'styled-components';

function BasketHeader() {
  return <Header>1 </Header>;
}

export default BasketHeader;

const Header = styled.div`
  display: flex;
  align-items: center;
  background: #20242e;
  color: white;
  justify-content: space-between;
  height: 50px;
  padding: 5px 20px 5px 10px;
`;
