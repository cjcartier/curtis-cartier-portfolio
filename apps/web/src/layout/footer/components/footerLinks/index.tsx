import MenuLinks, { FooterLink } from 'layout/footer/components/menuLinks';

import { footer } from 'theme/recipes';

import type { FC } from 'react';

interface FooterLinksProps {
  mainLinks?: FooterLink[];
  resourceLinks?: FooterLink[];
  contactLinks?: FooterLink[];
}

const FooterLinks: FC<FooterLinksProps> = ({ mainLinks, resourceLinks, contactLinks }) => {
  const { menuContainer } = footer();

  return (
    <nav className={menuContainer}>
      {mainLinks && <MenuLinks menuLabel="Main" links={mainLinks} />}
      {resourceLinks && <MenuLinks menuLabel="Resources" links={resourceLinks} />}
      {contactLinks && <MenuLinks menuLabel="Contact" links={contactLinks} />}
    </nav>
  );
};

export default FooterLinks;
