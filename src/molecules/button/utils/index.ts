import { arrayValuesExist } from 'utils/arrays';

import type { ButtonIconProps, ButtonProps } from 'molecules/button/';

type PartitionedIconProps = { startIcons: ButtonIconProps[]; endIcons: ButtonIconProps[] };

export const getButtonIconArrays = (icons: ButtonProps['icons']) =>
  arrayValuesExist(icons) &&
  icons.reduce(
    (acc: PartitionedIconProps, icon, ind) => ({
      ...acc,
      [`${icon.position}Icons`]: [...acc[`${icon.position}Icons`], { id: ind, ...icon }],
    }),
    { startIcons: [], endIcons: [] },
  );

export default getButtonIconArrays;
