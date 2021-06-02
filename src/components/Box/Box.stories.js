import React from 'react';

import Box from './Box';
import { ThemeProvider } from 'react-jss';

import theme from "../../theme";

export default {
  title: 'Example/Box',
  component: Box,
  argTypes: {
    error: { control: 'boolean' },
    text: { control: 'text' },
  },
};

const Template = (args) => <ThemeProvider theme={theme}><Box {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  error: false,
  text: 'This is a box, the most primitive component.',
};

export const Error = Template.bind({});
Error.args = {
    error: true,
    text: "This is the box displaying an error.",
};

export const Complex = Template.bind({});
Complex.args = {
    error: false,
    text: "Boxes can have more complex contents.",
    children: <div><Box text="Like this!"></Box></div>,
};
