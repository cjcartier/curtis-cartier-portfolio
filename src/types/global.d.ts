import 'react';

declare global {
  type Maybe<T> = T | null | undefined;
  type StripMaybe<T> = Exclude<T, undefined | null>;
  type StripArray<T> = T extends Array<infer U> ? U : T;
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export interface PageProps {
  params: {
    slug: string[];
  };
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
