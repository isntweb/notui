import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  box: {
    padding: "1em",
    margin: "1em",
    textAlign: "center",
    border: `2px solid ${theme.black}`,
    color: theme.black,
    backgroundColor: theme.white,
  },
  errorBox: {
    padding: "1em",
    margin: "1em",
    textAlign: "center",
    border: `2px solid ${theme.red}`,
    color: theme.black,
    backgroundColor: theme.white,
  },
}));

export default useStyles;
