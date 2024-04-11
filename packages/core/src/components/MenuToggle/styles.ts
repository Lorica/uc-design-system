import { StyleSheet } from '../../hooks/useStyles';

export const styleSheetMenuToggle: StyleSheet = ({ pattern, unit, transition }) => ({
  container: {
    display: 'inline-block',
    position: 'relative',
  },

  dropdown: {
    ...transition.fade,
    visibility: 'visible',
    position: 'relative',
  },

  dropdown_hidden: {
    opacity: 0,
    visibility: 'hidden',
    userSelect: 'none',
  },

  menu: {
    marginTop: unit,
    position: 'relative',
  },

  controls: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  customToggle: {
    ...pattern.resetButton,
  },
});

export const styleSheetMenu: StyleSheet = ({ color, ui, pattern, unit }) => ({
  menu: {
    ...pattern.box,
    margin: 0,
    padding: `${unit}px 0`,
    backgroundColor: color.accent.bg,
    listStyle: 'none',

    '@selectors': {
      '> li': {
        position: 'initial',
      },

      // These are jank. Better way?
      '> li:first-child > *': {
        borderTopLeftRadius: ui.borderRadius,
        borderTopRightRadius: ui.borderRadius,
      },

      '> li:last-child > *': {
        borderBottomLeftRadius: ui.borderRadius,
        borderBottomRightRadius: ui.borderRadius,
      },
    },
  },

  menu_scrollable: {
    overflowY: 'auto',
  },
});
