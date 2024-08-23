import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Bikin bio LinkedIn profesional dalam hitungan detik."
          />
          <meta property="og:site_name" content="https://linkedin-bio-dev.vercel.app/" />
          <meta
            property="og:description"
            content="Bikin bio LinkedIn profesional dalam hitungan detik."
          />
          <meta property="og:title" content="Bikin Bio LinkedIn" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bikin Bio LinkedIn" />
          <meta
            name="twitter:description"
            content="Bikin bio LinkedIn profesional dalam hitungan detik."
          />
          <meta
            property="og:image"
            content="https://linkedin-bio-dev.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://linkedin-bio-dev.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
