import { q, sanityImage, z } from 'groqd';

export const getComponent = (_id: string, _type: string) => q('*').filterByType(_type).filter(`_id == "${_id}"`);

export const getSanityImage = (imageName: string) =>
  sanityImage(imageName, {
    additionalFields: {
      alt: q.string().optional(),
      featuredColor: q.string().optional().nullable(),
    },
  });

export const isValidZodLiteralUnion = <T extends z.ZodLiteral<unknown>>(literals: T[]): literals is [T, T, ...T[]] =>
  literals.length >= 2;

export const constructZodLiteralUnionType = <T extends z.ZodLiteral<unknown>>(literals: T[]) => {
  if (!isValidZodLiteralUnion(literals)) {
    throw new Error(
      'Literals passed do not meet the criteria for constructing a union schema, the minimum length is 2',
    );
  }

  return q.union(literals).optional().nullable();
};

export const constructLiteralArray = <T extends string>(literals: T[]): z.ZodLiteral<T>[] =>
  literals.map(literal => z.literal(literal));

export const constructUnionFromArray = <T extends string>(literals: T[]) =>
  constructZodLiteralUnionType(constructLiteralArray(literals));
