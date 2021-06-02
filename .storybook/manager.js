import { addons } from '@storybook/addons';
import { themes } from "@storybook/theming";
import customTheme from './Theme';

// options can be found here: https://storybook.js.org/docs/react/configure/features-and-behavior

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  theme: customTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
});
