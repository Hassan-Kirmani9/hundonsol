'use client';

import '../styles/globals.css';
import RippleCursor from '../components/RippleCursor';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>

      {children}
      <RippleCursor />
    </body>
  </html>
);

export default RootLayout;
