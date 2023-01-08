import React from "react";
import styles from "./button.module.css";

const Button = ({ value, isDisabled, type, onClick }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${styles.btn}`}
      onClick={onClick}
    >
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
