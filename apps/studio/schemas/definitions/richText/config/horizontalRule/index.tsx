import { GoHorizontalRule } from 'react-icons/go';
import { defineArrayMember } from 'sanity';

const horizontalRule = defineArrayMember({
  name: 'hr',
  title: 'Horizontal Rule',
  icon: GoHorizontalRule,
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: 'hr',
      hidden: true,
    },
  ],
  components: {
    preview: () => <hr />,
  },
});

export default horizontalRule;
