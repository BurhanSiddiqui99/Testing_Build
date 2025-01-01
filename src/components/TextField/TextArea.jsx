import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

function Textarea({
  rows,
  handleChange,
  placeholder,
  value,
  style,
  className,
  ...props
}) {
  return (
    <TextArea
      rows={rows}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      style={style}
      className={className}
      {...props}
    />
  );
}

export default Textarea;
