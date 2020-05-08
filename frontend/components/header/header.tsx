// External
import Link from 'next/link';
import Router from 'next/router';
import * as NProgress from 'nprogress';

// Components
import Subheader from './subheader';
import Navigation from './navigation';

// Styles
import { NavigationWrapper, StyledHeader } from './styles/header.styles';

if (typeof window !== 'undefined') {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}

const Header = (): JSX.Element => {
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
