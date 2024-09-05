'use client';

import { type FC, useEffect, useState } from 'react';

import Glow from 'atoms/glows';
import Logo from 'atoms/logo';

import Heading from 'molecules/heading';
import HoverCard from 'molecules/hoverCard';
import RichText from 'molecules/richText';

import updateToolArray from 'components/tools/utils/updateToolArray';

import { getRandomInt } from 'utils/numbers';

import { cx } from 'theme/css';
import { toolsComponent } from 'theme/recipes';

import type { Tool, ToolsComponent } from 'lib/sanity/gen/sanity.types';

const shownTools = 7;

const Tools: FC<ToolsComponent> = ({ heading, tools }) => {
  const classes = toolsComponent();
  const filteredTools = tools?.filter(tool => tool) as Tool[];
  const [currentTools, setCurrentTools] = useState<Tool[]>(filteredTools?.slice(0, shownTools) || []);

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
    <div className={classes.root}>
      {heading && <Heading headingType="h2" alignment="start" size="md" {...heading} />}
      <div className={classes.toolsContainer}>
        <Glow temperature="warm" />
        <div className={classes.hiddenTool} />
        {currentTools?.map((tool, ind) => {
          if (typeof tool === 'number' || !tool.logoId) {
            return null;
          }

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
      </div>
    </div>
  );
};

export default Tools;
