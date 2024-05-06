import { getPayload } from 'payload';

import configPromise from '@payload-config';

import Logo from 'assets/svgs/logo';

import Section from 'atoms/containers/section';

import { footer } from 'theme/recipes';

import type { FC } from 'react';
import type { Footer as FooterProps } from 'types/payload-types';
import Glow from 'atoms/glows';

const MenuLinks: FC<{ menuLabel: string; links: FooterProps['mainLinks'] }> = ({ menuLabel, links }) => {
  const classes = footer();

  return (
    <div className={classes.menuWrapper}>
      <h2>{menuLabel}</h2>
      <ul className={classes.menuList}>
        {links?.map(({ link }) => (
          <li key={link.link} className={classes.menuItem}>
            <a href={`/${link.link}`}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: FC<FooterProps> = async () => {
  const classes = footer();

  const payload = await getPayload({ config: configPromise });

  const data = await payload.findGlobal({
    slug: 'footer',
    depth: 2,
  });

  return (
    <Section id="footer" className={classes.section}>
      <div className={classes.glowOne}>
        <Glow temperature="warm" />
      </div>
      <div className={classes.glowTwo}>
        <Glow temperature="cool" />
      </div>
      <footer className={classes.root}>
        <div className={classes.logoWrapper}>
          <Logo className={classes.logo} />
          Curtis Cartier
        </div>
        <nav className={classes.menuContainer}>
          <MenuLinks menuLabel="Main" links={data.mainLinks} />
          <MenuLinks menuLabel="Resources" links={data.resourceLinks} />
          <MenuLinks menuLabel="Contact" links={data.contactLinks} />
        </nav>
        <div className={classes.legalContainer}>
          <span className={classes.copyright}>© {new Date().getFullYear()} Curtis Cartier. All Rights Reserved.</span>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
