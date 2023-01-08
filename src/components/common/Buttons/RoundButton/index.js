import React from "react";
import styles from "./style.module.css";

const RoundButton = ({ value, type, disable, icon, onClick }) => {
  return (
    <button
      className={styles.btn}
      type={type}
      disabled={disable}
      onClick={onClick}
    >
      {value} {icon ? icon : null}
    </button>
  );
};

RoundButton.defaultProps = {
  type: "button",
  value: "Button",
  disabled: false,
};

export default RoundButton;
