import { useEffect, useState } from 'react';

import type { StringInputProps, StringSchemaType } from 'sanity';

export type AsyncSelectSchemaTypeOptions = StringSchemaType['options'] & {
  url: string;
  formatResponse: (response: { data: unknown[] }) => unknown[];
};

export type AsyncSelectSchemaType = StringSchemaType & {
  options: AsyncSelectSchemaTypeOptions;
};

export interface AsyncSelectProps extends StringInputProps {
  schemaType: AsyncSelectSchemaType;
}

const AsyncSelect = (props: AsyncSelectProps) => {
  const [listItems, setListItems] = useState<unknown[]>([]),
    { schemaType, renderDefault } = props,
    { options } = schemaType,
    { url, formatResponse } = options;

  useEffect(() => {
    (async () =>
      fetch(url)
        .then(res => res.json())
        .then(formatResponse)
        .then(setListItems))();
  }, [url, formatResponse]);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } } as StringSchemaType,
  });
};

export default AsyncSelect;
