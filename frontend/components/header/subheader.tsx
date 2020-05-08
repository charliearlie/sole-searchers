// Components
import SubNavigation from './sub-navigation';

// Styles
import { StyledSubheader } from './styles/subheader.styles';

const Subheader = (): JSX.Element => {
  return (
    <StyledSubheader>
      <SubNavigation />
    </StyledSubheader>
  );
};

export default Subheader;
