import { q, sanityImage } from 'groqd';

export const getComponent = (_id: string, _type: string) => q('*').filterByType(_type).filter(`_id == "${_id}"`);

export const getSanityImage = (imageName: string) =>
  sanityImage(imageName, {
    additionalFields: {
      alt: q.string().optional(),
      featuredColor: q.string().optional().nullable(),
    },
  });
