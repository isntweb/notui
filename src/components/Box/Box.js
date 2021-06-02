import useStyles from "./styles";

function Box({ error, text, children }) {
  const classes = useStyles(error);
  return (
    <div className={error ? classes.errorBox : classes.box}>
      {text}
      {children}
    </div>
  );
}

// Box.propTypes = {
//   error: PropTypes.string,
//   text: PropTypes.string,
//   children: PropTypes.children,
// };
//
// Box.defaultProps = {
//   error: undefined,
//   text: undefined,
//   children: undefined,
// };

export default Box;
