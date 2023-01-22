import React from "react";
import styles from "./button.module.css";

const Button = ({ value, disable, type, onClick, icon, style }) => {
  return (
    <button
      type={type}
      disabled={disable}
      className={`${styles.btn}`}
      onClick={onClick}
      style={style}
    >
      {value} {icon}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  value: "Button",
  disabled: false,
};

export default Button;
