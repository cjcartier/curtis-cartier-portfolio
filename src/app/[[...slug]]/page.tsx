import { notFound } from 'next/navigation';
import { defineQuery } from 'next-sanity';

import client, { sanityFetch } from 'lib/sanity/client';

import ComponentGenerator from 'utils/componentGenerator';

import type { PAGE_QUERYResult } from 'lib/sanity/gen/sanity.types';
import type { FC } from 'react';
import type { PageProps } from 'types/global';

const PAGE_QUERY = `*[_type == "pages" && slug.current == $slug][0]{
  ...,
  layout[]->{
    ...,
    defined(heading) => {
      heading {
        ...,
        badges[]->,
        buttons[]->,
      }
    },
    defined(brands) => {
      brands[]->,
    },
    defined(form) => {
      form->
    },
    defined(switchback1) => {
      switchback1 {
        ...,
        tools[]->,
        image {
          ...,
          asset->
        }
      }
    },
    defined(switchback2) => {
      switchback2 {
        ...,
        tools[]->,
        image {
          ...,
          asset->
        }
      }
    },
    defined(tools) => {
      tools[]->
    },
    defined(testimonials) => {
      testimonials[]-> {
        ...,
        author-> {
          ...,
          headshot {
            ...,
            asset->,
          },
          company->
        }
      }
    }
  }
}`;

const Page: FC<PageProps> = async ({ params }) => {
  const data = await sanityFetch<PAGE_QUERYResult>({ query: PAGE_QUERY, params: { slug: params.slug || '/' } });

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
