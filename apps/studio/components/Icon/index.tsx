import { usePrefersDark } from '@sanity/ui';

import { IconIds, iconIds } from '@packages/ui/icons';

import type { FC } from 'react';

interface IconProps {
  /**
   * Defines the props for an icon component.
   */
  icon: IconIds;
  /**
   * Defines the size and color properties for an icon component.
   */
  size?: number;
}

const Icon: FC<IconProps> = ({ icon, size, ...props }) => {
  const prefersDark = usePrefersDark();

  return iconIds.includes(icon) ? (
    <div
      style={{
        padding: '5px',
        color: prefersDark ? 'white' : 'black',
      }}
    >
      <svg
        width={size || 24}
        height={size || 24}
        style={{
          display: 'flex',
          color: 'currentcolor',
        }}
        role="img"
        aria-label={icon}
        {...props}
      >
        <use href={`/static/icons/sprites.svg#${icon}`} />
      </svg>
    </div>
  ) : null;
};

export default Icon;
