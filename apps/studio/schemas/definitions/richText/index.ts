import { defineArrayMember, defineField } from 'sanity';

import { hasArrayValues } from '@packages/utils/arrays';

import type { AnnotationConfig, DecoratorConfig } from '@/schemas/definitions/richText/config';
import type { ListOptions } from '@/schemas/definitions/richText/config/lists';
import type { TextOptions } from '@/schemas/definitions/richText/config/text';
import type {
  ArrayOfType,
  ArrayRule,
  FieldDefinitionBase,
  FieldGroup,
  SchemaValidationValue,
  ValidationBuilder,
} from 'sanity';

import { annotationConfig, decoratorConfig } from '@/schemas/definitions/richText/config';
import horizontalRule from '@/schemas/definitions/richText/config/horizontalRule';
import listOptions from '@/schemas/definitions/richText/config/lists';
import textOptions from '@/schemas/definitions/richText/config/text';

type CommonRichTextOptions = FieldDefinitionBase &
  FieldGroup & {
    decorators?: DecoratorConfig[];
    annotations?: AnnotationConfig[];
    excludedTextStyles?: (TextOptions | ListOptions)[];
    includeRule?: boolean;
    additionalSchemas?: ArrayOfType[];
  };

type SingleLineOptions = CommonRichTextOptions & {
  validation?: SchemaValidationValue;
};

type RichTextOptions = CommonRichTextOptions & {
  validation?: ValidationBuilder<ArrayRule<unknown[]>, string>;
};

export const defineSingleLineRichText = ({ name, title, decorators, annotations, ...props }: SingleLineOptions) =>
  defineField({
    name,
    title,
    type: 'pt-string',
    options: {
      decorators: hasArrayValues(decorators) ? decorators.flatMap(decorator => decoratorConfig[decorator]) : [],
      annotations: hasArrayValues(annotations) ? annotations.flatMap(annotation => annotationConfig[annotation]) : [],
    },
    validation: props.validation as SchemaValidationValue,
    ...props,
  });

const defineRichText = ({
  name,
  title,
  decorators,
  annotations,
  excludedTextStyles,
  includeRule,
  additionalSchemas,
  ...props
}: RichTextOptions) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      defineArrayMember({
        type: 'block',
        styles: textOptions.filter(type => !excludedTextStyles?.includes(type.value)),
        lists: listOptions.filter(type => !excludedTextStyles?.includes(type.value)),
        marks: {
          decorators: hasArrayValues(decorators) ? decorators.flatMap(decorator => decoratorConfig[decorator]) : [],
          annotations: hasArrayValues(annotations)
            ? annotations.flatMap(annotation => annotationConfig[annotation])
            : [],
        },
      }),
      ...(includeRule ? [horizontalRule] : []),
      ...(additionalSchemas || []),
    ],
    ...props,
  });

export default defineRichText;
