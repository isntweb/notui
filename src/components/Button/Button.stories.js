import React from 'react';

import Button from './Button';
import { ThemeProvider } from 'react-jss';

import theme from "../../theme";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ThemeProvider theme={theme}><Button {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  label: 'Test Button',
};
