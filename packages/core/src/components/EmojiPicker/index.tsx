import React from 'react';
import BaseEmojiPicker, { PickerProps } from 'interweave-emoji-picker';
import IconBolt from '@usercentric/uc-design-system-icons/lib/general/IconBolt';
import IconBulb from '@usercentric/uc-design-system-icons/lib/general/IconBulb';
import IconClock from '@usercentric/uc-design-system-icons/lib/general/IconClock';
import IconFlag from '@usercentric/uc-design-system-icons/lib/interface/IconFlag';
import IconFlower from '@usercentric/uc-design-system-icons/lib/general/IconFlower';
import IconPlane from '@usercentric/uc-design-system-icons/lib/general/IconPlane';
import IconSmile from '@usercentric/uc-design-system-icons/lib/general/IconSmile';
import IconThumbUp from '@usercentric/uc-design-system-icons/lib/interface/IconThumbUp';
import IconUtensils from '@usercentric/uc-design-system-icons/lib/general/IconUtensils';
import IconVideoGame from '@usercentric/uc-design-system-icons/lib/general/IconVideoGame';
import IconCloseAlt from '@usercentric/uc-design-system-icons/lib/interface/IconCloseAlt';
import useStyles, { StyleSheet } from '../../hooks/useStyles';
import Core from '../..';
import { ESCAPE } from '../../keys';
import T from '../Translate';
import { styleSheetEmojiPicker } from './styles';

// Exclude inappropriate or offensive emojis
const blockList = [
  '1F621', // 😡 pouting face
  '1F620', // 😠 angry face
  '1F47F', // 👿 angry face with horns
  '1F4A9', // 💩 pile of poo
  '1F595', // 🖕 middle finger
  '1F445', // 👅 tongue
  '1F444', // 👄 mouth
  '1F48B', // 💋 kiss mark
  '1F4A3', // 💣️ bomb
  '1F346', // 🍆 eggplant
  '1F52A', // 🔪 kitchen knife
  '1F3E9', // 🏩 love hotel
  '1F52B', // 🔫 pistol
  '1F489', // 💉 syringe
  '1F48A', // 💊 pill
];

const groupIcons = {
  commonlyUsed: <IconClock decorative />,
  smileysEmotion: <IconSmile decorative />,
  peopleBody: <IconThumbUp decorative />,
  animalsNature: <IconFlower decorative />,
  foodDrink: <IconUtensils decorative />,
  travelPlaces: <IconPlane decorative />,
  activities: <IconVideoGame decorative />,
  objects: <IconBulb decorative />,
  symbols: <IconBolt decorative />,
  flags: <IconFlag decorative />,
};

const clearIcon = <IconCloseAlt decorative size="1.325em" />;

export type EmojiPickerProps = Partial<PickerProps> & {
  /** @ignore */
  disableAutoFocus?: boolean;
  /** A function to close the picker. Is triggered by the escape key. */
  onClosePicker: () => void;
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
};

/**
 * Display an emoji picker using [interweave-emoji-picker](https://github.com/milesj/interweave/tree/master/packages/interweave-emoji-picker).
 * Should primarily be used for private to public communication.
 */
export default function EmojiPicker({
  disableAutoFocus,
  onClosePicker,
  styleSheet,
  ...props
}: EmojiPickerProps) {
  const [styles, cx] = useStyles(styleSheet ?? styleSheetEmojiPicker);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // When the picker wrapper is focused, we need to close on esc
    if (event.key === ESCAPE && onClosePicker) {
      onClosePicker();
    }
  };

  const classNames = {
    picker: cx(styles.picker),
    emoji: cx(styles.emoji),
    emojiActive: cx(styles.emoji_active),
    emojis: cx(styles.emojis),
    emojisSection: cx(styles.emojisSection),
    emojisHeader: cx(styles.emojisHeader),
    emojisHeaderSticky: cx(styles.emojisHeader_sticky),
    emojisBody: cx(styles.emojisBody),
    group: cx(styles.group),
    groupActive: cx(styles.group_active),
    groups: cx(styles.groups),
    groupsList: cx(styles.list),
    skinTone: cx(styles.skinTone),
    skinToneActive: cx(styles.skinTone_active),
    skinTones: cx(styles.skinTones),
    skinTonesList: cx(styles.list),
    noPreview: cx(styles.noPreview),
    noResults: cx(styles.noResults),
    preview: cx(styles.preview),
    previewEmoji: cx(styles.previewEmoji),
    previewTitle: cx(styles.previewTitle),
    previewSubtitle: cx(styles.previewSubtitle),
    previewShiftMore: cx(styles.previewShiftMore),
    search: cx(styles.search),
    searchInput: cx(styles.searchInput),
    clear: cx(styles.clear),
  };

  const messages = {
    recentlyUsed: T.phrase('uc-design-system.emoji.recentlyUsed', 'Recently Used'),
    frequentlyUsed: T.phrase('uc-design-system.emoji.frequentlyUsed', 'Frequently Used'),
    smileysEmotion: T.phrase('uc-design-system.emoji.smileysEmotion', 'Smileys & Emotions'),
    peopleBody: T.phrase('uc-design-system.emoji.peopleBody', 'People & Bodies'),
    animalsNature: T.phrase('uc-design-system.emoji.animalsNature', 'Animals & Nature'),
    foodDrink: T.phrase('uc-design-system.emoji.foodDrink', 'Food & Drink'),
    travelPlaces: T.phrase('uc-design-system.emoji.travelWeather', 'Travel & Weather'),
    activities: T.phrase('uc-design-system.emoji.activities', 'Activities'),
    objects: T.phrase('uc-design-system.emoji.objects', 'Objects'),
    symbols: T.phrase('uc-design-system.emoji.symbols', 'Symbols'),
    flags: T.phrase('uc-design-system.emoji.flags', 'Flags'),
    variations: T.phrase('uc-design-system.emoji.variations', 'Variations'),
    searchResults: T.phrase('uc-design-system.emoji.searchResults', 'Search results'),
    none: T.phrase('uc-design-system.emoji.allResults', 'All emojis'),
    skinNone: T.phrase('uc-design-system.emoji.noSkinTone', 'No skin tone'),
    skinLight: T.phrase('uc-design-system.emoji.lightSkinTone', 'Light skin tone'),
    skinMediumLight: T.phrase(
      'uc-design-system.emoji.mediumLightSkinTone',
      'Medium-light skin tone',
    ),
    skinMedium: T.phrase('uc-design-system.emoji.mediumSkinTone', 'Medium skin tone'),
    skinMediumDark: T.phrase('uc-design-system.emoji.mediumDarkSkinTone', 'Medium-dark skin tone'),
    skinDark: T.phrase('uc-design-system.emoji.darkSkinTone', 'Dark skin tone'),
    search: T.phrase('uc-design-system.emoji.search', 'Search emojis'),
    searchA11y: T.phrase('uc-design-system.emoji.searchKeyword', 'Search for emojis by keyword'),
    noResults: T.phrase('uc-design-system.emoji.noResults', 'No results, please try again.'),
    clearUsed: T.phrase('uc-design-system.emoji.clearFrequentlyUsed', 'Clear frequently used'),
  };

  return (
    <div role="presentation" onKeyUp={handleKeyUp}>
      <BaseEmojiPicker
        stickyGroupHeader
        autoFocus={!disableAutoFocus}
        columnCount={10}
        commonMode="frequently-used"
        emojiLargeSize={48}
        emojiPadding={5}
        emojiPath={Core.settings.emojiCDN}
        emojiSize={20}
        maxEmojiVersion={12}
        {...props}
        blockList={blockList}
        classNames={classNames}
        clearIcon={clearIcon}
        displayOrder={['preview', 'emojis', 'search', 'groups']}
        groupIcons={groupIcons}
        messages={messages}
      />
    </div>
  );
}
