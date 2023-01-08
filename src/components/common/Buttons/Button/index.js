import React from "react";
import styles from "./button.module.css";

const Button = ({ value, disable, type, onClick }) => {
  return (
    <button
      type={type}
      disabled={disable}
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
