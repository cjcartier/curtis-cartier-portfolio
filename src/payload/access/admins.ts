import { checkRole } from '../collections/users/utils/checkRole';

import type { User } from '../payload-types';
import type { AccessArgs } from 'payload/config';

type isAdmin = (args: AccessArgs<unknown, User>) => boolean;

export const admins: isAdmin = ({ req: { user } }) => checkRole(['admin'], user);

export default admins;
