import { defineField } from 'sanity';

import type { FieldDefinitionBase, FieldGroup } from 'sanity';

type ImageDefinition = FieldDefinitionBase & Omit<FieldGroup, 'fields'>;

const defineImage = (definition: ImageDefinition) =>
  defineField({
    ...definition,
    type: 'image',
    fields: [
      defineField({
        name: 'alt',
        title: 'Alternative text',
        type: 'string',
        validation: Rule =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Rule.custom((alt, context: any) => {
            if (alt && !('asset' in context.parent)) {
              return 'Remove text from alt field if no image is provided';
            }

            if (!alt && 'asset' in context.parent) {
              return 'Alt text is required if image is provided';
            }

            return true;
          }),
      }),
      defineField({
        name: 'caption',
        title: 'Caption',
        type: 'string',
      }),
    ],
  });

export default defineImage;
