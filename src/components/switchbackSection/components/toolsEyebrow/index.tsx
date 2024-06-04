import Logo from 'atoms/logo';

import payloadContentExists from 'utils/payloadContentExists';

import { toolsEyebrow } from 'theme/recipes';

import type { FC } from 'react';
import type { Tool } from 'types/payload-types';

const ToolsEyebrow: FC<{ tools: (number | Tool)[] }> = ({ tools }) => {
  const classes = toolsEyebrow();

  return (
    <div className={classes.root}>
      {tools.map(
        tool =>
          payloadContentExists(tool) && (
            <Logo key={tool.id} className={classes.tool} logo={tool.logoId || ''} isIcon size="24px" />
          ),
      )}
    </div>
  );
};

export default ToolsEyebrow;
