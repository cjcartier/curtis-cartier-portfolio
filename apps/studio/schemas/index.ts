import company from '@/schemas/documents/company';
import footer from '@/schemas/documents/footer';
import form from '@/schemas/documents/form';
import header from '@/schemas/documents/header';
import notFound from '@/schemas/documents/notFound';
import pages from '@/schemas/documents/pages/page';
import person from '@/schemas/documents/person';
import redirect from '@/schemas/documents/redirect';
import siteSettings from '@/schemas/documents/settings';
import symbol from '@/schemas/documents/symbol';
import testimonials from '@/schemas/documents/testimonial';
import tools from '@/schemas/documents/tools';

import type { SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [company, footer, form, header, notFound, pages, person, redirect, siteSettings, symbol, testimonials, tools],
};

export default schema;
