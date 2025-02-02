import { q } from 'groqd';

import Logo from '@/atoms/logo';

import { toolsEyebrow } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';
import type { FC } from 'react';

interface ToolsEyebrowProps {
  tools: TypeFromSelection<typeof toolsEyebrowSelection>[];
}

const ToolsEyebrow: FC<ToolsEyebrowProps> = ({ tools }) => {
  const classes = toolsEyebrow();

  return (
    <div className={classes.root}>
      {tools.map(
        (tool) =>
          tool && (
            <Logo
              key={tool._id}
              className={classes.tool}
              logo={tool.logoId || ''}
              isIcon
              size='24px'
            />
          )
      )}
    </div>
  );
};

export const toolsEyebrowSelection = {
  _id: q.string().optional(),
  logoId: q.string().optional(),
} satisfies Selection;

export default ToolsEyebrow;
