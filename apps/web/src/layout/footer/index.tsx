import { defineQuery } from 'next-sanity';

import { sanityFetch } from 'lib/client';

import Logo from 'assets/svgs/logo';

import Section from 'atoms/containers/section';
import Glow from 'atoms/glows';

import { footer } from 'theme/recipes';

import type { FC } from 'react';
import type { ClassStyles } from 'types/global';

const FOOTER_QUERY = defineQuery('*[_type == "footer"][0]{_id,_type,contactLinks[],resourceLinks[],mainLinks[]}');

// TODO: Add Link
const MenuLinks: FC<{ menuLabel: string; links: FooterProps['mainLinks'] }> = ({ menuLabel, links }) => {
  const classes = footer();

  return (
    <div className={classes.menuWrapper}>
      <h2>{menuLabel}</h2>
      <ul className={classes.menuList}>
        {links?.map(({ link, label }) => (
          <li key={link} className={classes.menuItem}>
            <a href={`/${link}`}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterLinks: FC<StripMaybe<FOOTER_QUERYResult> & ClassStyles> = ({
  mainLinks,
  resourceLinks,
  contactLinks,
  className,
}) => (
  <nav className={className}>
    {mainLinks && <MenuLinks menuLabel="Main" links={mainLinks} />}
    {resourceLinks && <MenuLinks menuLabel="Resources" links={resourceLinks} />}
    {contactLinks && <MenuLinks menuLabel="Contact" links={contactLinks} />}
  </nav>
);

const Footer = async () => {
  const classes = footer();
  const data = await sanityFetch<FOOTER_QUERYResult>({ query: FOOTER_QUERY });

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
        {data && <FooterLinks className={classes.menuContainer} {...data} />}
        <div className={classes.legalContainer}>
          <span className={classes.copyright}>© {new Date().getFullYear()} Curtis Cartier. All Rights Reserved.</span>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
