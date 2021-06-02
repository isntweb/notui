import React from 'react';

import Title from './Title';
import { ThemeProvider } from 'react-jss';

import theme from "../../theme";

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <ThemeProvider theme={theme}><Title {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a title component that should be used for titles!',
};
