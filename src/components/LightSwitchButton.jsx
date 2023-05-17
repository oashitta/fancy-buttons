import { useState } from "react";

function LightSwitchButton(props) {
  const { light, switchLight } = props;

  const handleClick = () => {
    switchLight();
  };

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {/* When the state is on */}
      {light === "on" && (
        <span className="on">
          <i>💡</i> I'm on!
        </span>
      )}

      {/* When the state is off */}
      {light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
    </button>
  );
}

export default LightSwitchButton;
