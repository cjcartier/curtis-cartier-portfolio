const assertValue = <T>(v: T | undefined, errorMessage: string): T => {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
};

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-09';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET',
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID',
);
