import React from 'react';
import PropTypes from 'prop-types';
import { componentWithName } from 'airbnb-prop-types';
import { WithIconWrapperProps } from '@usercentric/uc-design-system-icons/lib/withIcon';
import { STRIP_HOC_NAMES } from '../constants';

const propType: PropTypes.Requireable<React.ReactElement> = componentWithName<
  React.ReactElement<WithIconWrapperProps>
>(/(Icon[A-Z]|DirectionalIcon|ExpandableIcon)/, {
  stripHOCs: STRIP_HOC_NAMES,
});

export default propType;
