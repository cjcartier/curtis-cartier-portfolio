import { PortableText, PortableTextComponents } from 'next-sanity';

import { PortableTextBlock } from '@portabletext/types';
import { FC } from 'react';

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
      throw new Error(message, {
        // eg `someUnknownType`
        type: options.type,

        // 'block' | 'mark' | 'blockStyle' | 'listStyle' | 'listItemStyle'
        nodeType: options.nodeType,
      });
    }}
  />
);

export default RichText;
