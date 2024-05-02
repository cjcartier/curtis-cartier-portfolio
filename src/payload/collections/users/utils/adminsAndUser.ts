import { checkRole } from 'payload/collections/users/utils/checkRole';

import type { Access } from 'payload/types';

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user)) {
      return true;
    }

    return {
      id: {
        equals: user.id,
      },
    };
  }

  return false;
};

export default adminsAndUser;
