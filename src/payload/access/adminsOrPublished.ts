import { checkRole } from 'payload/collections/users/utils/checkRole';

import type { Access } from 'payload/config';

export const adminsOrPublished: Access = ({ req: { user } }) => {
  if (user && checkRole(['admin'], user)) {
    return true;
  }

  return {
    _status: {
      equals: 'published',
    },
  };
};

export default adminsOrPublished;
