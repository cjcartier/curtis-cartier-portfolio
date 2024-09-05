import Logo from 'atoms/logo';

import { toolsEyebrow } from 'theme/recipes';

import type { Tool } from 'lib/sanity/gen/sanity.types';
import type { FC } from 'react';

const ToolsEyebrow: FC<{ tools: Tool[] }> = ({ tools }) => {
  const classes = toolsEyebrow();

  return (
    <div className={classes.root}>
      {tools.map(
        tool => tool && <Logo key={tool._id} className={classes.tool} logo={tool.logoId || ''} isIcon size="24px" />,
      )}
    </div>
  );
};

export default ToolsEyebrow;
