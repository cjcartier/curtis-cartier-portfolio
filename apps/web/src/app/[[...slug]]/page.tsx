import { q } from 'groqd';
import { notFound } from 'next/navigation';

import { runQuery } from 'lib/client';

import ComponentGenerator, { componentGeneratorQuery } from 'utils/componentGenerator';

import type { FC } from 'react';
import type { PageProps } from 'types/global';

const pageQuery = q('*').filterByType('pages').filter('seo.slug.current == $slug').grab({
  body: componentGeneratorQuery,
});

const Page: FC<PageProps> = async ({ params }) => {
  const resolvedParams = await params;
  const data = (await runQuery(pageQuery, { slug: resolvedParams.slug }))[0];

  if (!data) return notFound();

  return <ComponentGenerator sections={data.body} />;
};

export default Page;
