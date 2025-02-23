import 'app/globals.css';

import { robotoMono, sharpGrotesk, sharpSans } from 'assets/fonts';

import Footer from 'layout/footer';
import Header from 'layout/header';

import ThemeScript from 'lib/ThemeScript';

import { cx } from 'theme/css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <ThemeScript />
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
    </head>
    <body className={cx(sharpGrotesk.variable, sharpSans.variable, robotoMono.variable)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
