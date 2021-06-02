import React from 'react';

import TextInput from './TextInput';
import { ThemeProvider } from 'react-jss';

import theme from "../../theme";

export default {
  title: 'TextInput', 
  description: "A controlled text input component.",
  component: TextInput,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <ThemeProvider theme={theme}><TextInput {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter some text...',
};
