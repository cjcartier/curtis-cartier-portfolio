import { q, Selection, TypeFromSelection } from 'groqd';
import { FC } from 'react';
import { footer } from 'theme/recipes';

export type FooterLink = TypeFromSelection<typeof footerLink>;

interface FootMenuLink {
  menuLabel: string;
  links: FooterLink[];
}

// TODO: Add Link
const MenuLinks: FC<FootMenuLink> = ({ menuLabel, links }) => {
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

export const footerLink = {
  link: q.string().optional(),
  label: q.string().optional(),
} satisfies Selection;

export default MenuLinks;
