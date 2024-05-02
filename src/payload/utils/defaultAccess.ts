import admins from 'payload/access/admins';
import adminsOrPublished from 'payload/access/adminsOrPublished';

const defaultAccess = {
  versions: {
    drafts: true,
    maxPerDoc: 10,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
};

export default defaultAccess;
