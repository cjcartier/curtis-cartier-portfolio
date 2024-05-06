import Icon from 'atoms/icon';

import parseUrl from 'utils/parseUrl';

import { cx } from 'theme/css';
import { VisuallyHidden, styled } from 'theme/jsx';
import { button } from 'theme/recipes';

import type { IconIds } from 'atoms/icon';
import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import type { HTMLStyledProps } from 'theme/jsx';
import type { ButtonVariantProps } from 'theme/recipes';

type NativeButtonProps = ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

export type ButtonIconProps = { id: number; position: 'start' | 'end'; icon: IconIds };

export interface ButtonProps extends ButtonVariantProps, Omit<NativeButtonProps, 'color'> {
  /**
   * String label for button. Recommend short concise call to action
   * if `iconsOnly` is selected, label will become visibly hidden
   */
  label?: string;
  /**
   * Link if button is acting as navigation
   * Do not add a link if you are use an action event
   */
  link?: string | null;
  /**
   * The ID of the icon to be used in the button.
   */
  icon?: IconIds | 'none' | null;
  /**
   * If true, this will remove the label visibly but include it for screen readers
   */
  iconsOnly?: boolean;
}

interface LabelProps extends HTMLStyledProps<'span'>, Pick<ButtonProps, 'iconsOnly'> {
  children: ReactNode;
}

const Label: FC<LabelProps> = ({ iconsOnly, children, className }) =>
  iconsOnly ? <VisuallyHidden>{children}</VisuallyHidden> : <span className={className}>{children}</span>;

const Button: FC<ButtonProps> = ({
  label,
  link,
  icon,
  iconsOnly,
  disabled,
  className,
  hierarchy,
  size,
  color,
  onClick,
  noPadding,
  fullWidth,
  ...props
}) => {
  const { Component: as, ...urlProps } = parseUrl(!disabled && link ? link : '');
  const component = as === 'div' ? 'button' : 'a';
  const Component = styled(component);
  const classes = button({ hierarchy, size, color, noPadding, fullWidth });

  return (
    <Component
      className={cx(classes.root, className, 'group')}
      disabled={disabled}
      data-icon-only={iconsOnly}
      {...urlProps}
      onClick={onClick}
      {...props}
    >
      {label && (
        <Label iconsOnly={iconsOnly} className={classes.label}>
          {label}
        </Label>
      )}
      {icon && <Icon icon={icon} className={classes.endIcon} />}
    </Component>
  );
};

export default Button;
