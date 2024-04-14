import { postgresAdapter } from '@payloadcms/db-postgres';
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'; // editor-import
import path from 'path';
import { buildConfig } from 'payload/config';
// import sharp from 'sharp'
import { fileURLToPath } from 'url';

import Testimonials from 'payload/collections/testimonial';
import Media from 'payload/collections/media';
import Person from 'payload/collections/person';
import Company from 'payload/collections/company';
import Pages from 'payload/collections/pages/page';
import Header from 'payload/globals/Header';
import Footer from 'payload/globals/Footer';
import Users from 'payload/collections/users';
import Button from 'payload/blocks/button';
import Code from 'payload/blocks/code';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Testimonials, Media, Person, Company, Pages],
  globals: [Header, Footer],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [Button, Code],
      }),
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
    outputFile: path.resolve(dirname, 'payload/payload-types.ts'),
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
