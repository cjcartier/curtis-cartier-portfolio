import { q } from 'groqd';
import type { FC } from 'react';

import { runQuery } from 'lib/client';
import { getComponent } from 'lib/groq';

import Glow from 'atoms/glows';

import Heading, { headingSelection } from 'molecules/heading';

import ToolsSwitcher from 'components/tools/components/toolsSwitcher';

import { toolsComponent } from 'theme/recipes';

import type { Selection } from 'groqd';
import type { ComponentId } from 'types/global';

const toolSelection = {
  _id: q.string(),
  logoId: q.string().optional(),
  tool: q.string().optional(),
  description: q.contentBlocks().optional(),
} satisfies Selection;

const Tools: FC<ComponentId> = async ({ _id }) => {
  const classes = toolsComponent();

  const query = getComponent(_id, 'toolsComponent').grab({
    heading: q.object(headingSelection),
    tools: q('tools').filter().deref().grab$(toolSelection),
  });

  const { heading, tools } = (await runQuery(query))[0];

  return (
    <div className={classes.root}>
      {heading && <Heading headingType="h2" alignment="start" size="md" {...heading} />}
      <div className={classes.toolsContainer}>
        <Glow temperature="warm" />
        <div className={classes.hiddenTool} />
        <ToolsSwitcher tools={tools} />
      </div>
    </div>
  );
};

export default Tools;
