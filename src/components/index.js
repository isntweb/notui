import Button from './Button/Button';
import Box from './Box/Box';
import TextInput from './Input/TextInput';
import Spinner from './Spinner/Spinner';
import Subtitle from './Subtitle/Subtitle';
import Text from './Text/Text';
import Title from './Title/Title';
import PropTypes from "./prop-types";

import { ThemeProvider, createUseStyles } from 'react-jss';
import theme from '../theme';

const NotUIThemeProvider = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export {
    Button,
    Box,
    TextInput,
    Spinner,
    Subtitle,
    Text,
    Title,
    PropTypes,
    NotUIThemeProvider,
    ThemeProvider,
    createUseStyles
};
