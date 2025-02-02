import Logo from 'assets/svgs/logo';

import Section from '@/atoms/containers/section';
import Glow from '@/atoms/glows';

import { footer } from 'theme/recipes';

import { q, Selection } from 'groqd';
import FooterLinks from './components/footerLinks';
import { footerLink } from './components/menuLinks';
import { runQuery } from 'lib/client';

const Footer = async () => {
  const classes = footer(),
    query = q('*').filterByType('footer').filter().grab$(footerSelection),
    data = (await runQuery(query))[0];

  return (
    <Section id='footer' className={classes.section}>
      <div className={classes.glowOne}>
        <Glow temperature='warm' />
      </div>
      <div className={classes.glowTwo}>
        <Glow temperature='cool' />
      </div>
      <footer className={classes.root}>
        <div className={classes.logoWrapper}>
          <Logo className={classes.logo} />
          Curtis Cartier
        </div>
        {data && <FooterLinks {...data} />}
        <div className={classes.legalContainer}>
          <span className={classes.copyright}>
            © {new Date().getFullYear()} Curtis Cartier. All Rights Reserved.
          </span>
        </div>
      </footer>
    </Section>
  );
};

const footerSelection = {
  _id: q.string(),
  _type: q.string(),
  contactLinks: q.object(footerLink).array().optional(),
  mainLinks: q.object(footerLink).array().optional(),
  resourceLinks: q.object(footerLink).array().optional(),
} satisfies Selection;

export default Footer;
