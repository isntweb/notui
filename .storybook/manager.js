import { addons } from '@storybook/addons';
import { themes } from "@storybook/theming";

// options can be found here: https://storybook.js.org/docs/react/configure/features-and-behavior

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  theme: themes.dark,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
});
