import T from '@usercentric/uc-design-system/lib/components/Translate';
import IconEmail from '@usercentric/uc-design-system-icons/lib/general/IconEmail';
import IconChatGroup from '@usercentric/uc-design-system-icons/lib/interface/IconChatGroup';
import IconLock from '@usercentric/uc-design-system-icons/lib/interface/IconLock';
import { MODE_MESSAGE, MODE_EMAIL, MODE_PRIVATE_NOTE } from '../constants';
import { ActionConfig, GroupedActions } from '../types';

export function getWritingModeActions(): ActionConfig[] {
  const groupLabel = T.phrase('uc-design-system.composer.actions.group.new', 'New…');

  return [
    {
      condition: ({ mode }) => mode !== MODE_MESSAGE,
      group: groupLabel,
      label: T.phrase('uc-design-system.composer.actions.label.message', 'Message'),
      icon: IconChatGroup,
      onRun: ({ setMode }) => {
        setMode(MODE_MESSAGE);
      },
    },
    {
      condition: ({ mode }) => mode !== MODE_EMAIL,
      group: groupLabel,
      label: T.phrase('uc-design-system.composer.actions.label.email', 'Email'),
      icon: IconEmail,
      onRun: ({ setMode }) => {
        setMode(MODE_EMAIL);
      },
    },
    {
      condition: ({ mode }) => mode !== MODE_PRIVATE_NOTE,
      group: groupLabel,
      label: T.phrase('uc-design-system.composer.actions.label.privateNote', 'Private note'),
      icon: IconLock,
      onRun: ({ setMode }) => {
        setMode(MODE_PRIVATE_NOTE);
      },
    },
  ];
}

export function mapActionsIntoGroups(actions: ActionConfig[], groupedActions: GroupedActions) {
  actions.forEach((action) => {
    // eslint-disable-next-line no-param-reassign
    groupedActions[action.group] = (groupedActions[action.group] || []).concat(action);
  });
}
