import React, { useState } from 'react';
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";
import './ToggleSwitch.css';

export const ToggleSwitch = () => {
  const [isOn, useIsOn] = useState(false);
  const handleToggleSwitch = () => {
    console.log("Clicked");
    useIsOn(!isOn);
  };
  const textIsOn = isOn ? 'ON' : 'OFF';
  const toggleBGColor = isOn ? { backgroundColor: 'green' } : { backgroundColor: 'red' };
  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
          Toggle Switch{" "}
          <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
          <PiUserSwitchFill />
        </h1>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
        >
        <div className={`switch ${textIsOn}`}>
          <span className="switch-state">{textIsOn}</span>
        </div>
      </div>
    </>
  );
}
export default ToggleSwitch;