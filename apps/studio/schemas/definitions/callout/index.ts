import type { ConditionalProperty } from 'sanity';

import CalloutCard from '@/schemas/definitions/callout/CalloutCard';

interface CalloutOptions {
  name?: string;
  title?: string;
  heading?: string;
  body?: string;
  group?: string | string[];
  hidden?: ConditionalProperty;
}

const defineCallout = ({ name = 'calloutUI', title = 'Callout UI', group, hidden, heading, body }: CalloutOptions) => ({
  name,
  title,
  group,
  hidden,
  type: 'string',
  options: { heading, body },
  components: {
    field: CalloutCard,
  },
});

export default defineCallout;
