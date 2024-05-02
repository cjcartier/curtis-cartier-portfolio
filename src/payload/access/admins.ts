import { checkRole } from 'payload/collections/users/utils/checkRole';

import type { AccessArgs } from 'payload/config';
import type { User } from 'payload/payload-types';

type isAdmin = (args: AccessArgs<unknown, User>) => boolean;

export const admins: isAdmin = ({ req: { user } }) => checkRole(['admin'], user);

export default admins;
