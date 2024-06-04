import path from 'path';
// import sharp from 'sharp'
import { fileURLToPath } from 'url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import Footer from 'payload/globals/Footer';
import Header from 'payload/globals/Header';

import Company from 'payload/collections/company';
import ConversionPanel from 'payload/collections/conversionPanel';
import Hero from 'payload/collections/hero';
import Media from 'payload/collections/media';
import Pages from 'payload/collections/pages/page';
import Person from 'payload/collections/person';
import PortCo from 'payload/collections/portco';
import Switchback from 'payload/collections/switchback';
import Testimonials from 'payload/collections/testimonial';
import TestimonialComponent from 'payload/collections/testimonialComponent';
import Tools from 'payload/collections/tools';
import ToolsComponent from 'payload/collections/toolsComponent';
import Users from 'payload/collections/users';
import { buildConfig } from 'payload/config';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Company,
    ConversionPanel,
    Hero,
    Media,
    Pages,
    Person,
    PortCo,
    Switchback,
    TestimonialComponent,
    Testimonials,
    Tools,
    ToolsComponent,
    Users,
  ],
  globals: [Header, Footer],
  editor: lexicalEditor({}),
  plugins: [
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `Curtis Cartier Portfolio — ${doc.title.value}`,
      generateImage: ({ doc }: any) => doc?.featuredImage?.value,
      generateURL: ({ doc }: any) => doc?.slug?.value,
      tabbedUI: true,
    }),
    formBuilderPlugin({
      fields: {
        payment: false,
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'types/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
});
