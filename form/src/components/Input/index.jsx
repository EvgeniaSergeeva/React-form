import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Input = (props) => {
  const { name, width, type, placeholder, value, onChange } = props;
  const inputStyle = { width: width };

  return (
    <input
      className={styles.inputStyle}
      style={inputStyle}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
};
Input.defaultProps = {
  width: "290px",
  onChange: () => {},
};

export default Input;
