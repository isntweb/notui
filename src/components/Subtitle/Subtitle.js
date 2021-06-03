import PropTypes from "../prop-types";

function Subtitle({ children }) {
  return <p>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.children.isRequired,
};

export default Subtitle;
