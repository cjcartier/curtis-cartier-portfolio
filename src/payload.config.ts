import path from 'path';
// import sharp from 'sharp'
import { fileURLToPath } from 'url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { BlocksFeature, TreeViewFeature, lexicalEditor } from '@payloadcms/richtext-lexical'; // editor-import

import Button from 'payload/blocks/button';
import Code from 'payload/blocks/code';

import Footer from 'payload/globals/Footer';
import Header from 'payload/globals/Header';

import Company from 'payload/collections/company';
import Hero from 'payload/collections/hero';
import Media from 'payload/collections/media';
import Pages from 'payload/collections/pages/page';
import Person from 'payload/collections/person';
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
    Users,
    Testimonials,
    Media,
    Person,
    Company,
    Pages,
    Hero,
    Switchback,
    TestimonialComponent,
    Tools,
    ToolsComponent,
  ],
  globals: [Header, Footer],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [Button, Code],
      }),
      TreeViewFeature(),
    ],
  }),
  plugins: [
    // s3Upload(
    //   new S3Client({
    //     region: process.env.AWS_REGION,
    //     credentials: {
    //       accessKeyId: process.env.AWS_KEY,
    //       secretAccessKey: process.env.AWS_SECRET,
    //     },
    //   }),
    // ),
    // seoPlugin({
    //   collections: ['pages'],
    //   uploadsCollection: 'media',
    //   generateTitle: ({ doc }: any) => `Curtis Cartier Portfolio — ${doc.title.value}`,
    //   generateImage: ({ doc }: any) => doc?.featuredImage?.value,
    //   generateURL: ({ doc }: any) => doc?.slug?.value,
    //   tabbedUI: true,
    // }),
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
