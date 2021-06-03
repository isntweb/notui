import { ThemeProvider } from 'react-jss';
import theme from '../theme';

const NotUIThemeProvider = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default NotUIThemeProvider;
