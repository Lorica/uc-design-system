import 'airbnb-js-shims'
import { stripHexcode } from 'emojibase'
import UCDS from '@usercentric/uc-design-system/src' // src required because of aliases
import { THEME } from './constants'

UCDS.initialize({
  name: 'uc-design-system',
  emojiCDN: (hexcode, large) =>
    `https://cdn.jsdelivr.net/gh/joypixels/emoji-assets@latest/png/${
    large ? 64 : 32
    }/${stripHexcode(hexcode).toLowerCase()}.png`,
  logger: console.log,
  theme: THEME,
})
