import { q } from 'groqd';

import Glow from 'atoms/glows';

import Heading, { headingSelection } from 'molecules/heading';
import { sectionSelection } from 'molecules/section';

import ToolsSwitcher, { toolSelection } from 'components/tools/components/toolsSwitcher';

import { toolsComponent } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';
import type { FC } from 'react';

type ToolsQuery = TypeFromSelection<typeof toolsComponentSelection>;

const Tools: FC<ToolsQuery> = ({ heading, tools }) => {
  const classes = toolsComponent();

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

export const toolsComponentSelection = {
  _id: q.string(),
  _key: q.string(),
  heading: q('heading').grab$(headingSelection),
  tools: q('tools').filter().deref().grab$(toolSelection),
  ...sectionSelection,
} satisfies Selection;

export default Tools;
