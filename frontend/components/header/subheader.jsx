import styled from 'styled-components';
import SubNavigation from './sub-navigation';

const Subheader = () => {
  return (
    <StyledSubheader>
      <SubNavigation />
    </StyledSubheader>
  );
};

export default Subheader;

const StyledSubheader = styled.div`
  background: #333;
  z-index: 3;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  height: 46px;
`;
