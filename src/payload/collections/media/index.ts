// import type { S3UploadCollectionConfig } from 'payload-s3-upload';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // staticURL: '/assets',
    staticDir: 'assets',
    // disableLocalStorage: true,
    // s3: {
    //   bucket: process.env.S3_BUCKET,
    //   prefix: ({ doc }) => `assets/${doc.type}`,
    // },
    // adminThumbnail: ({ doc }) =>
    //   `https://${process.env.S3_BUCKET}.s3.us-west-2.amazonaws.com/assets/${doc.type}/${doc.filename}`,
  },
  ...defaultAccess,
  fields: [
    {
      name: 'url',
      type: 'text',
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      // hooks: {
      //   afterRead: [
      //     ({ data: doc }) =>
      //       `https://${process.env.S3_BUCKET}.s3.us-west-2.amazonaws.com/assets/${doc.type}/${doc.filename}`,
      //   ],
      // },
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'featuredColor',
      type: 'text',
    },
  ],
};

export default Media;
