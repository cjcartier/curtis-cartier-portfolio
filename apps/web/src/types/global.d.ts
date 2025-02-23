import 'react';

import type { TypeFromSelection } from 'groqd';

declare global {
  type Maybe<T> = T | null | undefined;
  type StripMaybe<T> = Exclude<T, undefined | null>;
  type StripArray<T> = T extends Array<infer U> ? U : T;
  type Maybify<T> = {
    [P in keyof T]?: T[P];
  };
  type Optional<T> = {
    [P in keyof T]?: T[P] extends object ? Optional<T[P]> : T[P];
  };
  type OptionalTypeFromSelection<T> = Optional<TypeFromSelection<T>>;
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export interface PageProps {
  params: Promise<{ slug: string }>;
}

export interface ClassStyles {
  className?: string;
}

export interface ReactChildren {
  children: ReactNode;
}

export interface PassThroughProps extends ReactChildren, ClassStyles {}

export type Value = unknown;

export interface Property {
  [key: string]: Value;
}

export interface Data {
  [key: string]: Value | Property | Property[];
}

export type UndefinedProps<T> = { [K in keyof T]?: T[K] | null };

export type ExtractKey<T, K extends string> = T extends { [P in K]?: infer U } ? NonNullable<U> : never;

export type ComponentId = { _id: string };

type MaybifySanityMeta<T> = Omit<T, '_id' | '_type' | '_key'> & {
  _id?: T extends { _id: string } ? T['_id'] : never;
  _type?: T extends { _type: string } ? T['_type'] : never;
  _key?: T extends { _key: string } ? T['_key'] : never;
};
