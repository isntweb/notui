import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  box: {
    padding: "1em",
    margin: "1em",
    textAlign: "center",
    border: `2px solid ${theme.colors.black}`,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
  },
  errorBox: {
    padding: "1em",
    margin: "1em",
    textAlign: "center",
    border: `2px solid ${theme.colors.red}`,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
  },
}));

export default useStyles;
