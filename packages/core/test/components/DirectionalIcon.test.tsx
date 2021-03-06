import React from 'react';
import { shallow, mount } from 'enzyme';
import { DirectionContext } from 'aesthetic-react';
import IconChevronLeft from '@usercentric/uc-design-system-icons/lib/interface/IconChevronLeft';
import IconChevronRight from '@usercentric/uc-design-system-icons/lib/interface/IconChevronRight';
import DirectionalIcon from '../../src/components/DirectionalIcon';

describe('<DirectionalIcon />', () => {
  it('passes props to underlying icon', () => {
    const wrapper = shallow(
      <DirectionalIcon
        decorative
        direction="left"
        left={IconChevronLeft}
        right={IconChevronRight}
        size="1.5em"
      />,
    );

    expect(wrapper.prop('size')).toBe('1.5em');
    expect(wrapper.prop('decorative')).toBe(true);
  });

  describe('LTR', () => {
    it('renders left icon when direction is left', () => {
      const wrapper = shallow(
        <DirectionalIcon
          decorative
          direction="left"
          left={IconChevronLeft}
          right={IconChevronRight}
          size="1.5em"
        />,
      );

      expect(wrapper.is(IconChevronLeft)).toBe(true);
    });

    it('renders right icon when direction is right', () => {
      const wrapper = shallow(
        <DirectionalIcon
          decorative
          direction="right"
          left={IconChevronLeft}
          right={IconChevronRight}
          size="1.5em"
        />,
      );

      expect(wrapper.is(IconChevronRight)).toBe(true);
    });
  });

  describe('RTL', () => {
    it('renders right icon when direction is left', () => {
      const wrapper = mount(
        <DirectionContext.Provider value="rtl">
          <DirectionalIcon
            decorative
            direction="left"
            left={IconChevronLeft}
            right={IconChevronRight}
            size="1.5em"
          />
        </DirectionContext.Provider>,
      );

      expect(wrapper.find(IconChevronRight)).toHaveLength(1);
    });

    it('renders left icon when direction is right', () => {
      const wrapper = mount(
        <DirectionContext.Provider value="rtl">
          <DirectionalIcon
            decorative
            direction="right"
            left={IconChevronLeft}
            right={IconChevronRight}
            size="1.5em"
          />
        </DirectionContext.Provider>,
      );

      expect(wrapper.find(IconChevronLeft)).toHaveLength(1);
    });
  });
});
