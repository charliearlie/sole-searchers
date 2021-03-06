import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './header/header';
import Meta from './meta';

const theme = {
  bodyColour: '#fff',
  fontColour: '#000',
  red: '#E44847',
  moderateRed: '#D46F58',
  black: '#393939',
  darkBlue: '#2B3B4C',
  orange: '#E4964D',
  yellow: '#F2CA59',
  grey: '#3A3A3A',
  darkGreyishCyan: '#92A7AA',
  lightGrey: '#E1E1E1',
  lighterGrey: '#E0E0E0',
  offWhite: '#EDEDED',
  softBlue: '#68b2fc',
  maxWidth: '1100px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  spacingUnit: '0.8rem',
  spacingUnits: (num) => `${0.8 * num}rem`,
  mobileWidth: '600px',
  ipadWidth: '1024px',
};

// const darkTheme = {
//   bodyColour: '#262730',
//   fontColour: '#EDEDED',
//   red: '#E44847',
//   moderateRed: '#D46F58',
//   black: '#393939',
//   darkBlue: '#2B3B4C',
//   orange: '#E4964D',
//   yellow: '#F2CA59',
//   grey: '#3A3A3A',
//   darkGreyishCyan: '#92A7AA',
//   lightGrey: '#E1E1E1',
//   lighterGrey: '#E0E0E0',
//   offWhite: '#EDEDED',
//   softBlue: '#68b2fc',
//   maxWidth: '1100px',
//   bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
//   spacingUnit: '0.8rem',
//   spacingUnits: num => `${0.8 * num}rem`,
//   mobileWidth: '600px',
//   ipadWidth: '1024px',
// };

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledPage>
            <Meta />
            <Header />
            {this.props.children.type.name === 'Home' ? (
              <>{this.props.children}</>
            ) : (
              <Inner>{this.props.children}</Inner>
            )}
          </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}

/**
 * Styles
 */

const StyledPage = styled.div`
  background: ${(props) => props.theme.bodyColour};
  color: ${(props) => props.theme.fontColour};
`;

export const Inner = styled.div`
  margin: auto;
  max-width: ${(props) => props.theme.maxWidth};
  padding-top: 106px;

  p::selection,
  div::selection,
  h1::selection,
  h2::selection,
  h3::selection,
  h4::selection {
    background: ${({ theme }) => theme.red};
    color: white;
  }
`;

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  background: white;
  color: ${theme.black};
}
`;

export default Page;
