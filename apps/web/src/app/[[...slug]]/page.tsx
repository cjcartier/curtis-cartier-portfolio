import { q } from 'groqd';
import { notFound } from 'next/navigation';

import { runQuery } from 'lib/client';

import ComponentGenerator, { componentGeneratorQuery } from 'utils/componentGenerator';
import constructMetadata, { seoSelection } from 'utils/constructMetadata';

import type { Metadata } from 'next';
import type { FC } from 'react';
import type { PageProps } from 'types/global';

const pageQuery = q('*').filterByType('pages').filter('seo.slug.current == $slug').grab({
    body: componentGeneratorQuery,
  }),
  pagesQuery = q('*')
    .filterByType('pages')
    .grab$({
      slug: ['seo.slug.current', q.string()],
    }),
  pageSeoQuery = q('*')
    .filterByType('pages')
    .filter('seo.slug.current == $slug')
    .grab$({
      seo: q('seo').grab$(seoSelection).nullable(),
    });

const Page: FC<PageProps> = async ({ params }) => {
  const resolvedParams = await params,
    data = (await runQuery(pageQuery, { slug: resolvedParams.slug || '/' }))[0];

  if (!data) return notFound();

  return <ComponentGenerator sections={data.body} />;
};

export const generateStaticParams = async () => {
  const res = await runQuery(pagesQuery),
    slugs = res.map(page => ({ slug: [page.slug] }));

  return [...slugs, { slug: ['/'] }];
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const resolvedParams = await params,
    data = (await runQuery(pageSeoQuery, { slug: resolvedParams.slug || '/' }))[0];

  console.log(data, resolvedParams);

  if (!data?.seo) return {};

  return constructMetadata(data.seo, resolvedParams.slug || '/');
};

export const revalidate = 3600;
export const dynamicParams = true;

export default Page;
