import React from 'react';

import Text from './Text';
import { ThemeProvider } from 'react-jss';

import theme from "../../theme";

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <ThemeProvider theme={theme}><Text {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a basic text component. Use it instead of others so that text formatting can be more easily controlled!',
};
