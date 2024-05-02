/* eslint-disable react/no-array-index-key */
import { Fragment, type ReactNode } from 'react';

import { IS_BOLD, IS_CODE, IS_ITALIC, IS_STRIKETHROUGH, IS_UNDERLINE } from 'utils/lexical/nodeFormat';

import { css } from 'theme/css';

export type RichTextChildren = RichText[];

export type RichNode = { [k: string]: unknown };
type RichText = {
  type: string;
  value?: {
    url: string;
    alt: string;
  };
  children?: RichTextChildren;
  [key: string]: unknown;
  fields?: {
    [key: string]: unknown;
    url?: string;
  };
};

const renderText = (node: { [key: string]: unknown }) => {
  if (!node.text) {
    return null;
  }

  const text = typeof node.text === 'string' && <>{node.text}</>;

  switch (node.format) {
    case IS_BOLD:
      return <strong>{text}</strong>;
    case IS_ITALIC:
      return <em>{text}</em>;
    case IS_UNDERLINE:
      return <span className={css({ textDecoration: 'underline' })}>{text}</span>;
    case IS_STRIKETHROUGH:
      return <span className={css({ textDecoration: 'line-through' })}>{text}</span>;
    case IS_CODE:
      return (
        <code
          className={css({
            border: '1px solid',
            borderColor: 'gray.700',
            p: '4',
            bgColor: 'white/3',
            borderRadius: 'sm',
            textStyle: 'code',
          })}
        >
          {text}
        </code>
      );
    default:
      return <>{text}</>;
  }
};

const richTextParser = (children?: RichTextChildren): ReactNode[] => {
  const parsedRichText =
    children?.map((node, i) => {
      const isText = 'text' in node;

      if (isText) {
        return (
          <p key={i} className={css({ color: 'inherit' })}>
            {renderText(node)}
          </p>
        );
      }

      switch (node.type) {
        case 'h1':
          return <h1 key={i}>{richTextParser(node?.children)}</h1>;
        case 'h2':
          return <h2 key={i}>{richTextParser(node?.children)}</h2>;
        case 'h3':
          return <h3 key={i}>{richTextParser(node?.children)}</h3>;
        case 'h4':
          return <h4 key={i}>{richTextParser(node?.children)}</h4>;
        case 'h5':
          return <h5 key={i}>{richTextParser(node?.children)}</h5>;
        case 'h6':
          return <h6 key={i}>{richTextParser(node?.children)}</h6>;
        case 'link': {
          return (
            <a
              key={i}
              href={node?.fields?.url || '/'}
              className={css({
                position: 'relative',
                fontWeight: 'bold',
                _dark: { color: 'blue.200' },
                _after: {
                  content: '""',
                  absoluteCover: true,
                  width: '0%',
                  borderBottom: '2px solid',
                  borderBottomColor: 'blue.200',
                  transition: 'width 150ms ease-in-out',
                },
                _hover: { _after: { width: '100%' } },
              })}
            >
              {richTextParser(node?.children)}
            </a>
          );
        }
        case 'ul':
          return <ul key={i}>{richTextParser(node?.children)}</ul>;
        case 'ol':
          return <ol key={i}>{richTextParser(node?.children)}</ol>;
        case 'li':
          return <li key={i}>{richTextParser(node?.children)}</li>;
        case 'blockquote':
          return <blockquote key={i}>{richTextParser(node?.children)}</blockquote>;
        case 'linebreak':
          return null;
        default: {
          if (!node?.children?.[0]?.text && node?.children?.length === 1) {
            return null;
          }

          return <Fragment key={i}>{richTextParser(node?.children)}</Fragment>;
        }
      }
    }) || [];

  return parsedRichText;
};

export default richTextParser;
