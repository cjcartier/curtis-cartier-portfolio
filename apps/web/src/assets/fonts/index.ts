import localFont from 'next/font/local';

export const sharpGrotesk = localFont({
  src: [
    {
      path: './SharpGroteskBook18.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SharpGroteskBookItalic18.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './SharpGroteskSmBold12.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SharpGroteskSmBoldItalic12.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './SharpGroteskSmBold20.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SharpGroteskSmBoldItalic20.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './SharpGroteskSmBold25.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './SharpGroteskSmBoldItalic25.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--sharp-grotesk',
});

export const sharpSans = localFont({
  src: [
    {
      path: './SharpSansDispNo2-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SharpSansDispNo2-BookObl.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './SharpSansDispNo2-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SharpSansDispNo2-MediumObl.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './SharpSansDispNo2-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SharpSansDispNo2-SemiboldObl.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './SharpSansDispNo2-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SharpSansDispNo2-BoldObl.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--sharp-sans',
});

export const robotoMono = localFont({
  src: [
    {
      path: './RobotoMono-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--roboto-mono',
});
