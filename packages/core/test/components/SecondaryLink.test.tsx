import React from 'react';
import { mountWithStyles } from '@usercentric/uc-design-system-test-utils';
import SecondaryLink from '../../src/components/SecondaryLink';
import ButtonOrLink from '../../src/components/private/ButtonOrLink';

describe('<SecondaryLink />', () => {
  it('renders a secondary link', () => {
    const wrapper = mountWithStyles(<SecondaryLink>Link</SecondaryLink>);

    expect(wrapper.find(ButtonOrLink)).toHaveLength(1);
  });
});
