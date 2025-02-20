'use client';

import { type FC, useEffect, useState } from 'react';

import Logo from 'atoms/logo';

import HoverCard from 'molecules/hoverCard';
import RichText from 'molecules/richText';

import { toolSelection } from 'components/tools';
import updateToolArray from 'components/tools/utils/updateToolArray';

import { getRandomInt } from 'utils/numbers';

import { cx } from 'theme/css';
import { toolsComponent } from 'theme/recipes';

import type { TypeFromSelection } from 'groqd';

export type Tool = TypeFromSelection<typeof toolSelection>;

interface ToolSwitchProps {
  tools: Tool[];
}

const SHOWN_TOOLS = 7;

const ToolsSwitcher: FC<ToolSwitchProps> = ({ tools }) => {
  const classes = toolsComponent(),
    filteredTools = tools?.filter(tool => tool),
    [currentTools, setCurrentTools] = useState(filteredTools?.slice(0, SHOWN_TOOLS) || []);

  useEffect(() => {
    if (!tools) return;

    const interval = setInterval(() => {
      const hoveredCard = document.querySelector('.tools__tool[data-hovered="true"]'),
        excludedIndex = hoveredCard?.getAttribute('data-index'),
        updatedInd = getRandomInt(SHOWN_TOOLS, Number(excludedIndex)),
        card = document.getElementById(`tool-${updatedInd}`);

      card?.classList.add('flip-out-right');

      setTimeout(() => {
        setCurrentTools(updateToolArray(currentTools, filteredTools, updatedInd));
      }, 300);

      setTimeout(() => {
        const newCard = document.getElementById(`tool-${updatedInd}`);
        newCard?.classList.add('flip-in-right');
      }, 320);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {currentTools?.map((tool, ind) => {
        if (typeof tool === 'number' || !tool?.logoId) return null;

        return (
          <div
            key={tool.logoId}
            id={`tool-${ind}`}
            className={cx(classes.tool, 'group')}
            data-index={ind}
            onMouseEnter={e => (e.target as HTMLDivElement).setAttribute('data-hovered', 'true')}
            onMouseLeave={e => (e.target as HTMLDivElement).removeAttribute('data-hovered')}
          >
            <Logo logo={tool.logoId} className={classes.toolLogo} />
            <HoverCard id={tool.logoId || String(ind)} iconId="info-circle" iconClassName={classes.hoverCardIcon}>
              <h4>{tool.tool}</h4>
              {tool.description && <RichText blocks={tool.description} />}
            </HoverCard>
          </div>
        );
      })}
    </>
  );
};

export default ToolsSwitcher;
