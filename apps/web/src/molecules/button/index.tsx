import { type Selection, TypeFromSelection, q } from 'groqd';
import { MaybifySanityMeta } from 'types/global';

import { IconIds } from '@packages/ui/icons';
import parseUrl from '@packages/utils/parseUrl';
import { objectKeys } from '@packages/utils/typeUtils';

import { buttonVariants } from 'molecules/button/styles';
import Icon, { iconSelection } from 'molecules/icon';
import { linkSelection } from 'molecules/link';

import { constructUnionFromArray } from 'lib/groq';

import { cx } from 'theme/css';
import { VisuallyHidden, styled } from 'theme/jsx';
import { button } from 'theme/recipes';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import type { HTMLStyledProps } from 'theme/jsx';
import type { ButtonVariantProps } from 'theme/recipes';

type NativeButtonProps = ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;
type ButtonQuery = TypeFromSelection<typeof buttonSelection>;
type LinkProps = ButtonQuery['link'] | string;

export type ButtonIconProps = {
  id: number;
  position: 'start' | 'end';
  icon: IconIds;
};

export interface ButtonProps
  extends Omit<MaybifySanityMeta<ButtonQuery>, 'link'>,
    Omit<ButtonVariantProps, 'hierarchy'>,
    Omit<NativeButtonProps, 'color'> {
  /**
   * If true, this will remove the label visibly but include it for screen readers
   */
  iconsOnly?: boolean;
  link?: LinkProps;
  label?: string;
}

interface LabelProps extends HTMLStyledProps<'span'>, Pick<ButtonProps, 'iconsOnly'> {
  children: ReactNode;
}

export const getLinkData = (link?: LinkProps) => {
  if (!link) return '';

  if (typeof link === 'string') return link;

  switch (link?.type) {
    case 'internalLink':
      return `/${link.internalLink?.link?.slug}`;
    case 'link':
      return link.link?.href;
  }
};

const Label: FC<LabelProps> = ({ iconsOnly, children, className }) =>
  iconsOnly ? <VisuallyHidden>{children}</VisuallyHidden> : <span className={className}>{children}</span>;

const Button: FC<ButtonProps> = ({
  link,
  label,
  icon,
  iconPosition,
  iconsOnly,
  disabled,
  className,
  hierarchy,
  color,
  size,
  onClick,
  noPadding,
  fullWidth,
  loading,
  ...props
}) => {
  const { as, ...urlProps } = parseUrl(!disabled ? getLinkData(link) : null),
    Component = styled(as === 'span' ? 'button' : 'a'),
    classes = button({
      hierarchy,
      size,
      color,
      noPadding,
      fullWidth,
      loading,
    });

  return (
    <Component
      className={cx(classes.root, className, 'group')}
      disabled={disabled}
      data-icon-only={iconsOnly}
      {...urlProps}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'start' && <Icon icon={icon as IconIds} className={classes.endIcon} />}
      <Label iconsOnly={iconsOnly} className={classes.label}>
        {label || (typeof link !== 'string' && link?.label)}
      </Label>
      {icon && iconPosition === 'end' && <Icon icon={icon as IconIds} className={classes.endIcon} />}
    </Component>
  );
};

export const buttonSelection = {
  _type: q.literal('button'),
  _key: q.string(),
  ...iconSelection,
  iconPosition: constructUnionFromArray(['start', 'end'] as const),
  hierarchy: constructUnionFromArray(objectKeys(buttonVariants.hierarchy)),
  link: q('link').grab$(linkSelection),
} satisfies Selection;

export default Button;
