import { FC } from 'react';
import MenuLinks, { FooterLink } from '../menuLinks';
import { footer } from 'theme/recipes';

interface FooterLinksProps {
  mainLinks?: FooterLink[];
  resourceLinks?: FooterLink[];
  contactLinks?: FooterLink[];
}

const FooterLinks: FC<FooterLinksProps> = ({
  mainLinks,
  resourceLinks,
  contactLinks,
}) => {
  const { menuContainer } = footer();

  return (
    <nav className={menuContainer}>
      {mainLinks && <MenuLinks menuLabel='Main' links={mainLinks} />}
      {resourceLinks && (
        <MenuLinks menuLabel='Resources' links={resourceLinks} />
      )}
      {contactLinks && <MenuLinks menuLabel='Contact' links={contactLinks} />}
    </nav>
  );
};

export default FooterLinks;
