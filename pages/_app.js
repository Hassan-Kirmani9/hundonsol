import Head from 'next/head';

import '../styles/globals.css';
import RippleCursor from '../components/RippleCursor';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>HUNDONSOL</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
    <RippleCursor />
  </>
);

export default MyApp;
