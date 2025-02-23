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
    .filterByType('page')
    .grab$({
      slug: ['seo.slug.current', q.string()],
    }),
  pageSeoQuery = q('*')
    .filterByType('page')
    .filter('seo.slug.current == $slug')
    .grab$({
      seo: q('seo').grab$(seoSelection),
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
    slug = (Array.isArray(resolvedParams.slug) && resolvedParams.slug?.join('/')) || 'home',
    data = (await runQuery(pageSeoQuery, { slug }))[0];

  if (!data) return {};

  return constructMetadata(data.seo, slug === 'home' ? '' : slug);
};

export const revalidate = 3600;
export const dynamicParams = true;

export default Page;
