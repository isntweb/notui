import React from 'react';

import Spinner from './Spinner';
import { ThemeProvider } from 'react-jss';

import theme from "../../theme";

export default {
  title: 'Spinner',
  component: Spinner,
};

const Template = (args) => <ThemeProvider theme={theme}><Spinner {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = { };
