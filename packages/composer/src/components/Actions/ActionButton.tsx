import React from 'react'
import IconAddAlt from '@lorica/uc-design-system-icons/lib/interface/IconAddAlt'
import T from '@lorica/uc-design-system/lib/components/Translate'
import ToggleButton from '../Menu/ToggleButton'
import { MENU_ACTIONS } from '../../constants'

export default function ActionButton() {
  return (
    <ToggleButton
      accessibilityLabel={T.phrase(
        'uc-design-system.composer.labels.openActionsMenu',
        'Open actions menu'
      )}
      icon={IconAddAlt}
      menu={MENU_ACTIONS}
    />
  )
}
