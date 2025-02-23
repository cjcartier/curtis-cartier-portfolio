import {
  BookIcon,
  CogIcon,
  ComponentIcon,
  DocumentsIcon,
  ErrorOutlineIcon,
  HomeIcon,
  InsertBelowIcon,
  RedoIcon,
  UserIcon,
} from '@sanity/icons';
import { IoIosNavigate } from 'react-icons/io';
import { IoGlobeOutline } from 'react-icons/io5';
import { singletonDocumentListItem } from 'sanity-plugin-singleton-tools';

import type { StructureBuilder, StructureResolverContext } from 'sanity/structure';

const mainSitePagesMenu = (S: StructureBuilder) =>
  S.listItem()
    .title('Main Website Pages')
    .icon(DocumentsIcon)
    .child(
      S.list()
        .title('Main Website Pages')
        .items([
          S.listItem()
            .title('Home')
            .icon(HomeIcon)
            .child(S.document().schemaType('page').documentId('9915aae4-42f9-422e-b070-ae167f657d7b')),
          S.divider(),
          S.documentTypeListItem('pages').title('Pages').icon(BookIcon),
        ]),
    );

// const blogListingMenu = (S: StructureBuilder) =>
//   S.listItem()
//     .title('Blog')
//     .icon(EditIcon)
//     .child(
//       S.list()
//         .title('Blog')
//         .items([
//           S.listItem()
//             .title('Blog Homepage')
//             .icon(HomeIcon)
//             .child(S.document().schemaType('page').documentId('06b0f591-b469-4657-9626-a5093144f933')),
//           S.documentTypeListItem('blog').title('Blog Posts').icon(IoDocuments),
//           S.documentTypeListItem('blogCategory').title('Blog Category').icon(TagsIcon),
//         ]),
//     );

const peopleAndCompaniesMenu = (S: StructureBuilder) =>
  S.listItem()
    .title('People & Companies')
    .icon(UserIcon)
    .child(
      S.list()
        .title('People & Companies')
        .items([
          S.documentTypeListItem('person').title('People'),
          S.documentTypeListItem('company').title('Companies'),
          S.documentTypeListItem('tool').title('Tools'),
          S.documentTypeListItem('testimonial').title('Testimonials'),
        ]),
    );

const contentBlocksMenu = (S: StructureBuilder) =>
  S.listItem()
    .title('Content Building Blocks')
    .icon(ComponentIcon)
    .child(
      S.list()
        .title('Content Building Blocks')
        .items([
          S.documentTypeListItem('form').title('Hubspot Forms'),
          S.documentTypeListItem('symbol').title('Symbols'),
          // S.documentTypeListItem('token').title('Tokens'),
        ]),
    );

const globalMenu = (S: StructureBuilder, context: StructureResolverContext) =>
  S.listItem()
    .title('Global')
    .icon(IoGlobeOutline)
    .child(
      S.list()
        .title('Global')
        .items([
          singletonDocumentListItem({
            S,
            context,
            type: 'navigation',
            title: 'Navigation',
            id: 'navigation',
            icon: IoIosNavigate,
          }),
          singletonDocumentListItem({
            S,
            context,
            type: 'footer',
            title: 'Footer',
            id: 'footer',
            icon: InsertBelowIcon,
          }),
          singletonDocumentListItem({
            S,
            context,
            type: 'notFound',
            title: 'Not Found Page',
            id: 'notFound',
            icon: ErrorOutlineIcon,
          }),
        ]),
    );

const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([
      mainSitePagesMenu(S),
      S.divider(),
      contentBlocksMenu(S),
      peopleAndCompaniesMenu(S),
      S.divider(),
      globalMenu(S, context),
      S.documentTypeListItem('redirect').title('Redirects').icon(RedoIcon),
      S.divider(),
      singletonDocumentListItem({
        S,
        context,
        type: 'settings',
        title: 'Site Settings',
        id: 'siteSettings',
        icon: CogIcon,
      }),
    ]);

export default structure;
