import * as hoverCardMachine from '@zag-js/hover-card';
import { Portal, normalizeProps, useMachine } from '@zag-js/react';

import Icon from 'atoms/icon';

import { cx } from 'theme/css';
import { hoverCard } from 'theme/recipes';

import type { IconIds } from 'atoms/icon/types';
import type { FC } from 'react';
import type { ReactChildren } from 'types/global';

interface HoverCardProps extends ReactChildren {
  id: string;
  iconClassName?: string;
  iconId?: IconIds;
}

const HoverCard: FC<HoverCardProps> = ({ id, iconId, children, iconClassName }) => {
  const classes = hoverCard();
  const [state, send] = useMachine(hoverCardMachine.machine({ id }));

  const api = hoverCardMachine.connect(state, send, normalizeProps);

  return (
    <>
      <div className={cx(classes.icon, iconClassName)} {...api.getTriggerProps()}>
        <Icon icon={iconId || 'expand'} size="16" />
      </div>
      {api?.open && (
        <Portal>
          <div {...api.getPositionerProps()}>
            <div className={classes.content} {...api.getContentProps()}>
              <div {...api.getArrowProps()}>
                <div {...api.getArrowTipProps()} />
              </div>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default HoverCard;
