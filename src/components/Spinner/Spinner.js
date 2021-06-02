import useStyles from "./styles";

function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.ripple}>
      <div />
      <div />
    </div>
  );
}

export default Spinner;
