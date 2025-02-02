import externalLink from '@/schemas/fields/links/external';
import internalLink from '@/schemas/fields/links/internal';

import code from '@/schemas/definitions/richText/config/code';
import colorDecorator from '@/schemas/definitions/richText/config/highlight';
import italic from '@/schemas/definitions/richText/config/italic';
import underline from '@/schemas/definitions/richText/config/underline';
import strong from '@/schemas/definitions/richText/config/weight';

export const decoratorConfig = {
  code,
  em: italic,
  highlight: colorDecorator,
  strong,
  underline,
};

export type DecoratorConfig = keyof typeof decoratorConfig;

export const annotationConfig = { link: externalLink, internalLink };

export type AnnotationConfig = keyof typeof annotationConfig;
