import { brandIds } from '..';

export type BrandIds = (typeof brandIds)[number];

export interface BrandProps {
  /**
   * Defines the props for an logo component.
   */
  brand: BrandIds;
  /**
   * Defines the height property for an logo component.
   */
  height?: `${number}px`;
  /**
   * Defines an optional aria-label attribute for the logo component.
   */
  ariaLabel?: string;
  className?: string;
}
