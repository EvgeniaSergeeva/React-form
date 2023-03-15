import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Button = (props) => {
  const { textBtn, color, bgColor, handleClick, disabled } = props;
  const btnStyle = { color, backgroundColor: bgColor };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={btnStyle}
      className={styles.buttonStyle}
    >
      {textBtn}
    </button>
  );
};

Button.propTypes = {
  textBtn: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  color: "white",
  bgColor: "orange",
  handleClick: () => {},
};

export default Button;
