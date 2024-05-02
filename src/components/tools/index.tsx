'use client';

import { type FC, useEffect, useState } from 'react';

import Glow from 'atoms/glows';
import Logo from 'atoms/logo';

import Heading from 'molecules/heading';
import HoverCard from 'molecules/hoverCard';

import richTextParser from 'utils/richTextParser';

import { cx } from 'theme/css';
import { toolsComponent } from 'theme/recipes';

import type { Tool, ToolsComponent } from 'types/payload-types';

const getRandomInt = (max: number, exclude?: number | null): number => {
  const num = Math.floor(Math.random() * max);

  return num === exclude ? getRandomInt(max, exclude) : num;
};

const updateToolArray = (currentTools: Tool[], allTools: Tool[], updateInd: number) => {
  const currentToolsIds = currentTools.map(tool => tool.logoId);
  const newTools = allTools.reduce(
    (acc, tool) => (currentToolsIds.includes(tool.logoId) ? acc : [...acc, tool]),
    [] as Tool[],
  );

  currentTools.splice(updateInd, 1, newTools[getRandomInt(newTools.length)]);

  return [...currentTools];
};

const shownTools = 7;

const Tools: FC<ToolsComponent> = ({ heading, tools }) => {
  const classes = toolsComponent();
  const [currentTools, setCurrentTools] = useState<Tool[]>(tools?.slice(0, shownTools) || []);

  useEffect(() => {
    if (!tools) {
      return;
    }

    const interval = setInterval(() => {
      const hoveredCard = document.querySelector('.tools__tool[data-hovered="true"]');
      const excludedIndex = hoveredCard?.getAttribute('data-index');
      const updatedInd = getRandomInt(shownTools, Number(excludedIndex));
      const card = document.getElementById(`tool-${updatedInd}`);
      card?.classList.add('flip-out-right');

      setTimeout(() => {
        setCurrentTools(updateToolArray(currentTools, tools, updatedInd));
      }, 300);

      setTimeout(() => {
        const newCard = document.getElementById(`tool-${updatedInd}`);
        newCard?.classList.add('flip-in-right');
      }, 320);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.root}>
      {heading && <Heading headingType="h2" alignment="start" size="md" {...heading[0]} />}
      <div className={classes.toolsContainer}>
        <Glow temperature="warm" />
        <div />
        {currentTools?.map((tool, ind) => {
          if (typeof tool === 'number') {
            return null;
          }

          return (
            <div
              key={tool.logoId}
              id={`tool-${ind}`}
              className={cx(classes.tool, 'group')}
              data-index={ind}
              onMouseEnter={e => e.target.setAttribute('data-hovered', true)}
              onMouseLeave={e => e.target.removeAttribute('data-hovered')}
            >
              <Logo logo={tool.logoId} size="90" />
              <HoverCard id={tool.logoId || String(ind)} iconId="info-circle" iconClassName={classes.hoverCardIcon}>
                <h4>{tool.tool}</h4>
                {tool.description && <p>{richTextParser(tool.description)}</p>}
              </HoverCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
