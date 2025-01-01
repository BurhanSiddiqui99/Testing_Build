import React from "react";
import ReactSwitch, { ReactSwitchProps } from "react-switch";
// eslint-disable-next-line
interface ToggleProps extends ReactSwitchProps {
  checked: any;
  onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, ...props }) => {
  return (
    <ReactSwitch
      checked={checked}
      onChange={onChange}
      checkedIcon={false}
      uncheckedIcon={false}
      onColor="#b53689"
      offColor="#fff"
      offHandleColor="#c2c2c2"
      {...props}
    />
  );
};

export default Toggle;
