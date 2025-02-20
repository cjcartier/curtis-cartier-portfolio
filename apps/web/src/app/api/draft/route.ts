import { defineEnableDraftMode } from 'next-sanity/draft-mode';

import { client } from 'lib/client';

export const { GET } = defineEnableDraftMode({ client });
