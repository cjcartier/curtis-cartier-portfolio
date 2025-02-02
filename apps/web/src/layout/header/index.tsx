import dynamic from 'next/dynamic';

import Logo from 'assets/svgs/logo';

import LoadingThemeToggle from 'molecules/themeToggle/loadingThemeButton';

import { header } from 'theme/recipes';

const ThemeToggle = dynamic(() => import('molecules/themeToggle'), {
  loading: () => <LoadingThemeToggle />,
});

const Header = () => {
  const { root, headerWrapper, logoWrapper, logo } = header();

  return (
    <div className={root}>
      <header className={headerWrapper}>
        <div className={logoWrapper}>
          <Logo className={logo} />
          Curtis Cartier
        </div>
        <div>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
};

export default Header;
