import { hasArrayValues } from '@packages/utils/arrays';
import { objectEntries } from '@packages/utils/typeUtils';

import { sectionSelection } from '..';

import type { SectionQueryProps } from '..';
import type { ComponentProps, ComponentPropsWithSymbols } from 'utils/componentGenerator';

type LiteralComponentProps = StripArray<StripMaybe<ComponentProps>>;

export const splitSectionProps = (
  props: StripMaybe<StripArray<ComponentPropsWithSymbols>>,
): { sectionProps: SectionQueryProps | Record<string, unknown>; rest: LiteralComponentProps } => {
  if (props._type === 'symbol' || hasArrayValues(props)) {
    return { sectionProps: {}, rest: props as unknown as LiteralComponentProps };
  }

  return objectEntries(props).reduce(
    (acc, [key, value]) => {
      if (Object.keys(sectionSelection).includes(key as string)) {
        return { ...acc, sectionProps: { ...acc.sectionProps, [key]: value } };
      }

      return { ...acc, rest: { ...acc.rest, [key]: value } };
    },
    { sectionProps: {} as SectionQueryProps, rest: {} as LiteralComponentProps },
  );
};
