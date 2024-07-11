import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import sectionField from 'schemas/fields/section';

const ToolsComponent = defineType({
  name: 'toolsComponent',
  title: 'Component: Tools',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    heading,
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tool' }],
        },
      ],
    },
    sectionField,
  ],
});

export default ToolsComponent;
