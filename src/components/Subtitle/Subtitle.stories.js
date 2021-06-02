import React from 'react';

import Subtitle from './Subtitle';
import { ThemeProvider } from 'react-jss';

import theme from "../../theme";

export default {
  title: 'Subtitle',
  component: Subtitle,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <ThemeProvider theme={theme}><Subtitle {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a component for subtitles.',
};
