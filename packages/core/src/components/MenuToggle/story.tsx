import React from 'react';
import IconMenuDots from '@usercentric/uc-design-system-icons/lib/interface/IconMenuDots';
import Menu from '../Menu';
import MenuToggle, { Item } from '.';
import Emoji from '../Emoji';

const children = [
  <Item key="0" onClick={() => console.log('onClick')}>
    Profile
  </Item>,
  <Item key="1" onClick={() => console.log('onClick')}>
    Settings
  </Item>,
  <Item key="2" onClick={() => console.log('onClick')}>
    Log Out
  </Item>,
];

export default {
  title: 'Core/MenuToggle',
  decorators: [(story: Function) => <div style={{ width: 200, margin: 'auto' }}>{story()}</div>],
  parameters: {
    happo: false,
    inspectComponents: [MenuToggle],
  },
};

export function aBasicMenuWithMenuItems() {
  return (
    <MenuToggle accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

aBasicMenuWithMenuItems.story = {
  name: 'A basic menu with menu items.',
};

export function withCustomTrigger() {
  return (
    <MenuToggle
      accessibilityLabel="Actions"
      toggleElement={
        <>
          Custom <Emoji unicode="🐱" /> Menu <Emoji unicode="🐱" /> Trigger
        </>
      }
      toggleLabel="Actions"
      zIndex={10}
    >
      {children}
    </MenuToggle>
  );
}

withCustomTrigger.story = {
  name: 'With custom trigger.',
};

export function withCustomIcon() {
  return (
    <MenuToggle
      accessibilityLabel="Actions"
      toggleIcon={<IconMenuDots decorative />}
      toggleLabel="Actions"
      zIndex={10}
    >
      {children}
    </MenuToggle>
  );
}

withCustomIcon.story = {
  name: 'With custom icon.',
};

export function closeOnClickOfAnItem() {
  return (
    <MenuToggle closeOnClick accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

closeOnClickOfAnItem.story = {
  name: 'Close on click of an item.',
};

export function ignoreClickOnOutside() {
  return (
    <MenuToggle ignoreClickOutside accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

ignoreClickOnOutside.story = {
  name: 'Ignore click on outside.',
};

export function asLeftAlign() {
  return (
    <MenuToggle
      accessibilityLabel="Actions"
      toggleLabel="Actions"
      zIndex={10}
      dropdownProps={{ left: 0 }}
    >
      {children}
    </MenuToggle>
  );
}

asLeftAlign.story = {
  name: 'As left align.',
};

export function withSubmenu() {
  return (
    <MenuToggle accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      <Item
        submenu={
          <Menu accessibilityLabel="B menu">
            <Item tip="Ctrl + A">{'B > 1'}</Item>
            <Item tip="Cmd + S">{'B > 2'}</Item>
            <Item
              submenu={
                <Menu accessibilityLabel="B > 3 menu">
                  <Item>{'B > 3 > 1'}</Item>
                </Menu>
              }
            >
              {'B > 3'}
            </Item>
          </Menu>
        }
      >
        B
      </Item>
    </MenuToggle>
  );
}

withSubmenu.story = {
  name: 'With submenu'
}

export function withSubmenuLeft() {
  return (
    <MenuToggle accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      <Item
        submenuDirection="left"
        submenu={
          <Menu accessibilityLabel="B menu">
            <Item tip="Ctrl + A">{'B > 1'}</Item>
            <Item tip="Cmd + S">{'B > 2'}</Item>
            <Item
              submenuDirection="left"
              submenu={
                <Menu accessibilityLabel="B > 3 menu">
                  <Item>{'B > 3 > 1'}</Item>
                </Menu>
              }
            >
              {'B > 3'}
            </Item>
          </Menu>
        }
      >
        B
      </Item>
    </MenuToggle>
  );
}

withSubmenuLeft.story = {
  name: 'With submenu expanding left'
}

export function withMaxHeight() {
  return (
    <MenuToggle
      accessibilityLabel="Actions"
      menuProps={{ maxHeight: 100 }}
      toggleLabel="Actions"
      zIndex={10}
    >
      {children}
    </MenuToggle>
  );
}

withMaxHeight.story = {
  name: 'With max height.',
};

export function asLarge() {
  return (
    <MenuToggle large accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

asLarge.story = {
  name: 'As large.',
};

export function asSmall() {
  return (
    <MenuToggle small accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

asSmall.story = {
  name: 'As small.',
};

export function withDisabled() {
  return (
    <MenuToggle disabled accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

withDisabled.story = {
  name: 'With disabled.',
};

export function aBasicMutedMenuWithMenuItems() {
  return (
    <MenuToggle muted accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

aBasicMutedMenuWithMenuItems.story = {
  name: 'With muted.',
};

export function aBasicMutedInvertedMenuWithMenuItems() {
  return (
    <MenuToggle muted inverted accessibilityLabel="Actions" toggleLabel="Actions" zIndex={10}>
      {children}
    </MenuToggle>
  );
}

aBasicMutedInvertedMenuWithMenuItems.story = {
  name: 'With muted and inverted.',
};
