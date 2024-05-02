import { notFound } from 'next/navigation';
import { getPayload } from 'payload';

import configPromise from '@payload-config';

import { arrayValuesExist } from 'utils/arrays';
import ComponentGenerator from 'utils/componentGenerator';

import type { FC } from 'react';
import type { PageProps } from 'types/global';

const Page: FC<PageProps> = async ({ params }) => {
  const payload = await getPayload({ config: configPromise });

  const data = await payload.find({
    collection: 'pages',
    depth: 10,
    where: { slug: { equals: params?.slug?.join('/') || 'homepage' } },
  });

  if (!arrayValuesExist(data.docs)) {
    return notFound();
  }

  return (
    <>
      <ComponentGenerator sections={data.docs[0].layout} />
    </>
  );
};

export default Page;
