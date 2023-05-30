import Document, { Html, Head, Main, NextScript } from 'next/document';



class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            {/* Add your favicon */}
            <link rel="icon" href="/kklogov4c.png" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

  export default MyDocument