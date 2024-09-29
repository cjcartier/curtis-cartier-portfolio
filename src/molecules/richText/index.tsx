import { PortableText } from 'next-sanity';

import type { PortableTextBlock } from '@portabletext/types';
import type { PortableTextComponents } from 'next-sanity';
import type { FC } from 'react';

interface RichTextProps {
  blocks: PortableTextBlock[];
}

const portableTextOptions: PortableTextComponents = {
  types: {},
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

const RichText: FC<RichTextProps> = ({ blocks }) => (
  <PortableText
    value={blocks}
    components={portableTextOptions}
    onMissingComponent={(message, options) => {
      throw new Error(`Error rendering PortableText: ${message}. Type: ${options.type}. NodeType: ${options.nodeType}`);
    }}
  />
);

export default RichText;
