import { ThemeProvider } from "react-jss";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { themes } from "@storybook/theming";
import customTheme from './Theme';

import { theme } from "../src/theme";

// const providerFn = ({ theme, children }) => {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// };
//
// addDecorator(withThemes(null, [theme], { providerFn }));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
      theme: customTheme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
