import { Selection, q } from 'groqd';

import Logo from 'assets/svgs/logo';

import Glow from 'atoms/glows';

import Section from 'molecules/section';

import MenuLinks, { footerLink } from 'layout/footer/components/menuLinks';

import { runQuery } from 'lib/client';

import { footer } from 'theme/recipes';

const footerSelection = {
  _id: q.string(),
  _type: q.string(),
  contactLinks: q('contactLinks').filter().grab$(footerLink), // q.object(footerLink).array().optional(),
} satisfies Selection;

const Footer = async () => {
  const classes = footer(),
    query = q('*').filterByType('footer').filter().grab$(footerSelection),
    data = (await runQuery(query))[0];

  return (
    <Section sectionId="footer" className={classes.section}>
      <div className={classes.glowOne}>
        <Glow temperature="warm" />
      </div>
      <div className={classes.glowTwo}>
        <Glow temperature="cool" />
      </div>
      <footer className={classes.root}>
        <div className={classes.container}>
          <div className={classes.logoWrapper}>
            <Logo className={classes.logo} />
            Curtis Cartier
          </div>
          {/* {data && <FooterLinks {...data} />} */}
          {data && data.contactLinks && <MenuLinks links={data.contactLinks} />}
        </div>

        <div className={classes.legalContainer}>
          <span className={classes.copyright}>© {new Date().getFullYear()} Curtis Cartier. All Rights Reserved.</span>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
