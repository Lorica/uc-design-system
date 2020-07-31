import React, { useContext } from 'react';
import { DirectionContext } from 'aesthetic-react';
import IconChevronLeft from '@usercentric/uc-design-system-icons/lib/interface/IconChevronLeft';
import IconChevronRight from '@usercentric/uc-design-system-icons/lib/interface/IconChevronRight';
import IconChevronDown from '@usercentric/uc-design-system-icons/lib/interface/IconChevronDown';
import DirectionalIcon from '../DirectionalIcon';
import Core from '../..';

export type ExpandableIconProps = {
  /** Whether the content has been expanded or not. */
  expanded: boolean;
  /** Custom size for the icons. */
  size?: string | number;
};

export default function ExpandableIcon({ expanded, size }: ExpandableIconProps) {
  const context = useContext(DirectionContext);

  return expanded ? (
    <IconChevronDown decorative size={size} />
  ) : (
    <DirectionalIcon
      decorative
      direction={Core.isRTL(context) ? 'left' : 'right'}
      left={IconChevronLeft}
      right={IconChevronRight}
      size={size}
    />
  );
}
