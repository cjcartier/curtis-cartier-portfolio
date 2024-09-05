import { groq } from 'next-sanity';

export const referenceFragment = (name: string, isArray = false, ext: Array<string> = []) => groq`
  defined(${name})=>{
    ${name}${isArray ? '[]->' : '->'}{
      ...,
      ${ext.join(',')}
    }
  }
  `;

export const fragment = (name: string, isArray = false, ext: Array<string> = []) =>
  `defined(${name})=>{
    ${name}${isArray ? '[]' : ''}{
      ...,
      ${ext.join(',')}
    }
  }`;
