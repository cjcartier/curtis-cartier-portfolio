import { q } from 'groqd';
import { notFound } from 'next/navigation';

import { runQuery } from 'lib/client';

import ComponentGenerator, {
  componentGeneratorSelection,
} from '@/utils/componentGenerator';

import type { FC } from 'react';
import type { PageProps } from 'types/global';

const Page: FC<PageProps> = async ({ params }) => {
  const query = q('*')
    .filterByType('pages')
    .filter(`slug.current == "${params.slug || '/'}"`)
    .grab({
      layout: q('layout').filter().deref().grab$(componentGeneratorSelection),
    });

  const data = (await runQuery(query))[0];

  if (!data) {
    return notFound();
  }

  return (
    <>
      <ComponentGenerator sections={data.layout} />
    </>
  );
};

export default Page;
