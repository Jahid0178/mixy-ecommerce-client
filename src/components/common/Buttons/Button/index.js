import React from "react";
import styles from "./button.module.css";

const Button = ({ value, isDisabled, type }) => {
  return (
    <button type={type} disabled={isDisabled} className={`${styles.btn}`}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  value: "Button",
  disabled: false,
};

export default Button;
