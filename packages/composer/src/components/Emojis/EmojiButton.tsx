import React from 'react'
import IconStarAlt from '@usercentric/uc-design-system-icons/lib/interface/IconStarAlt'
import T from '@usercentric/uc-design-system/lib/components/Translate'
import ToggleButton from '../Menu/ToggleButton'
import { MENU_EMOJIS } from '../../constants'

export default function EmojiButton() {
  return (
    <ToggleButton
      accessibilityLabel={T.phrase(
        'uc-design-system.composer.labels.openEmojiPicker',
        'Open emoji picker'
      )}
      icon={IconStarAlt}
      menu={MENU_EMOJIS}
    />
  )
}
