import { Selection, TypeFromSelection, q } from 'groqd';

import Icon, { iconSelection } from 'molecules/icon';
import { linkSelection } from 'molecules/link';

import { footer } from 'theme/recipes';

import type { FC } from 'react';

export type FooterLink = TypeFromSelection<typeof footerLink>;

interface FootMenuLink {
  menuLabel?: string;
  links: FooterLink[];
}

const MenuLinks: FC<FootMenuLink> = ({ menuLabel, links }) => {
  const classes = footer();

  return (
    <div className={classes.menuWrapper}>
      {menuLabel && <h2>{menuLabel}</h2>}
      <ul className={classes.menuList}>
        {links?.map(({ _key, link, icon }) => (
          <li key={_key} className={classes.menuItem}>
            <a href={link.link?.href}>{icon ? <Icon icon={icon} /> : link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const footerLink = {
  _key: q.string(),
  link: q('link').grab$(linkSelection),
  ...iconSelection,
} satisfies Selection;

export default MenuLinks;
