import React from 'react';
import { shallow } from 'enzyme';
import IconCaretRight from '@usercentric/uc-design-system-icons/lib/interface/IconCaretRight';
import Menu from '../../../src/components/Menu';
import Item from '../../../src/components/Menu/Item';
import ButtonOrLink from '../../../src/components/private/ButtonOrLink';
import DirectionalIcon from '../../../src/components/DirectionalIcon';

describe('<MenuItem />', () => {
  it('renders highlighted', () => {
    const wrapper = shallow(<Item highlighted>Foo</Item>);

    expect(wrapper.find(ButtonOrLink).prop('className')).toMatch('item_highlighted');
  });

  it('renders spacious', () => {
    const wrapper = shallow(<Item spacious>Foo</Item>);

    expect(wrapper.find(ButtonOrLink).prop('className')).toMatch('item_spacious');
  });

  it('renders a list with the correct role', () => {
    const wrapper = shallow(<Item>Foo</Item>);

    expect(wrapper.is('li')).toBe(true);
    expect(wrapper.prop('role')).toBe('none');
  });

  it('adds role to button', () => {
    const wrapper = shallow(<Item>Foo</Item>);

    expect(wrapper.find(ButtonOrLink).prop('role')).toBe('menuitem');

    wrapper.setProps({
      role: 'option',
    });

    expect(wrapper.find(ButtonOrLink).prop('role')).toBe('option');
  });

  it('passes props to underlying button', () => {
    const wrapper = shallow(
      <Item
        disabled
        openInNewWindow
        href="/"
        tabIndex={0}
        id="tracking-id"
        trackingName="tracking-name"
      >
        Foo
      </Item>,
    );

    expect(wrapper.find(ButtonOrLink).prop('disabled')).toBe(true);
    expect(wrapper.find(ButtonOrLink).prop('id')).toBe('tracking-id');
    expect(wrapper.find(ButtonOrLink).prop('trackingName')).toBe('tracking-name');
  });

  it('passes icon to underlying button', () => {
    const icon = <IconCaretRight decorative />;
    const wrapper = shallow(<Item icon={icon}>Foo</Item>);

    expect(wrapper.find(ButtonOrLink).prop('beforeIcon')).toBe(icon);
  });

  it('passes tip to underlying button', () => {
    const wrapper = shallow(<Item>Foo</Item>);

    expect(wrapper.find(ButtonOrLink).prop('afterIcon')).toBeNull();

    wrapper.setProps({
      tip: 'Something',
    });

    const icon = wrapper.find(ButtonOrLink).prop('afterIcon');
    const iconWrapper = shallow(icon as React.ReactElement);

    expect(icon).not.toBeNull();
    expect(iconWrapper.prop('children')).toBe('Something');
  });

  describe('submenu', () => {
    const menu = (
      <Menu accessibilityLabel="Test">
        <Item>Sub</Item>
      </Menu>
    );

    it('displays a submenu when item is hovered', () => {
      const wrapper = shallow(<Item submenu={menu}>Parent</Item>);

      expect(wrapper.contains(menu)).toBe(false);

      wrapper.find('li').simulate('mouseEnter');

      expect(wrapper.contains(menu)).toBe(true);

      wrapper.find('li').simulate('mouseLeave');

      expect(wrapper.contains(menu)).toBe(false);
    });

    it('sets aria-haspopup', () => {
      const wrapper = shallow(<Item submenu={menu}>Parent</Item>);

      expect(wrapper.find(ButtonOrLink).prop('aria-haspopup')).toBe(true);

      wrapper.setProps({
        submenu: null,
      });

      expect(wrapper.find(ButtonOrLink).prop('aria-haspopup')).toBe(false);
    });

    it('sets aria-expanded', () => {
      const wrapper = shallow(<Item submenu={menu}>Parent</Item>);

      expect(wrapper.find(ButtonOrLink).prop('aria-expanded')).toBe(false);

      wrapper.find('li').simulate('mouseEnter');

      expect(wrapper.find(ButtonOrLink).prop('aria-expanded')).toBe(true);
    });

    it('sets after icon when a submenu exists', () => {
      const wrapper = shallow(<Item>Foo</Item>);

      expect(wrapper.find(ButtonOrLink).prop('afterIcon')).toBeNull();

      wrapper.setProps({
        submenu: menu,
      });

      const icon = wrapper.find(ButtonOrLink).prop('afterIcon');
      const iconWrapper = shallow(icon as React.ReactElement);

      expect(icon).not.toBeNull();
      expect(iconWrapper.find(DirectionalIcon)).toHaveLength(1);
    });
  });
});
