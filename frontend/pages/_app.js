import App, { Container } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../util/with-apollo';
import GlobalState from '../context/global-state';
import Page from '../components/page';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    pageProps.headers = ctx.req.headers;
    return { pageProps };
  }
  render() {
    const { Component, apolloClient, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <GlobalState>
            <Page>
              <Component {...pageProps} />
            </Page>
          </GlobalState>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
