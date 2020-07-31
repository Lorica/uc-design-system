import React from 'react'
import IconUser from '@usercentric/uc-design-system-icons/lib/general/IconUser'
import IconSettings from '@usercentric/uc-design-system-icons/lib/interface/IconSettings'
import IconChat from '@usercentric/uc-design-system-icons/lib/interface/IconChat'
import SideBar, { Item } from '.'

export default {
  title: 'Layouts/SideBar',
  parameters: {
    inspectComponents: [SideBar, Item],
  },
}

export function aVerticalSidebarWithMenuItems() {
  return (
    <SideBar accessibilityLabel="Side menu">
      <Item icon={<IconUser accessibilityLabel="Profile" />} />
      <Item icon={<IconSettings accessibilityLabel="Settings" />} />
      <Item icon={<IconChat accessibilityLabel="Chat" />} />
    </SideBar>
  )
}

aVerticalSidebarWithMenuItems.story = {
  name: 'A vertical sidebar with menu items.',
}

export function withLabelsAndAnActiveState() {
  return (
    <SideBar accessibilityLabel="Side menu">
      <Item icon={<IconUser accessibilityLabel="Profile" />} label="Stats" />
      <Item
        active
        icon={<IconSettings accessibilityLabel="Settings" />}
        label="Config"
      />
      <Item icon={<IconChat accessibilityLabel="Chat" />} label="Chat" />
    </SideBar>
  )
}

withLabelsAndAnActiveState.story = {
  name: 'With labels and an active state.',
}
