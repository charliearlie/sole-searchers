// External
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

// Components
import Subheader from './subheader';
import Navigation from './navigation';

// Styles
import { NavigationWrapper, StyledHeader } from './styles/header.styles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  return (
    <>
      <StyledHeader>
        <NavigationWrapper>
          <Link href="/">
            <span className="logo">Sole Searchers</span>
          </Link>
          <Navigation />
        </NavigationWrapper>
        <Subheader />
      </StyledHeader>
    </>
  );
};

export default Header;
