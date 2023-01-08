import React from "react";

const RoundButton = ({ value, type, isDisable, icon, style, onClick }) => {
  console.log(onClick);
  return (
    <button style={style} type={type} disabled={isDisable} onClick={onClick}>
      {value} {icon}
    </button>
  );
};

RoundButton.defaultProps = {
  type: "button",
  value: "Button",
  disabled: false,
};

export default RoundButton;
