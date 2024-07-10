import type { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import type { Block } from 'payload/types';

const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    { name: 'internalName', label: 'Internal Name', type: 'text', required: true },
    {
      name: 'codeBlocks',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'path', label: 'Path', type: 'text' },
            {
              name: 'language',
              label: 'Language',
              type: 'select',
              options: ['typescript', 'javascript', 'css'],
              required: true,
            },
          ],
        },
        {
          name: 'code',
          label: 'Code',
          type: 'code',
        },
        {
          name: 'rowHighlights',
          label: 'Row Highlights',
          type: 'json',
          admin: {
            description:
              'Comma separated list of arrays with start and stop row numbers to highlight, e.g. [1, 3],[5, 7],[9-11]',
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: ({ data }: RowLabelArgs) => data?.language || data?.path,
        },
      },
    },
  ],
};

export default Code;
