import { Input } from "antd";
import React from "react";

const Basic = ({
  placeholder,
  bordered,
  disabled,
  maxLength,
  showCount,
  prefix,
  size,
  suffix,
  onChange,
  onClick,
  type,
  value,
  containerStyle,
  fieldStyle,
  ...props
}) => (
  <div style={containerStyle}>
    <Input
      placeholder={placeholder}
      bordered={bordered}
      disabled={disabled}
      maxLength={maxLength}
      showCount={showCount}
      prefix={prefix}
      size={size}
      suffix={suffix}
      onChange={onChange}
      onClick={onClick}
      type={type}
      value={value}
      style={fieldStyle}
      {...props}
    />
  </div>
);

export default Basic;
