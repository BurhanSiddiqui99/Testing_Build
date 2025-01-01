import { AutoComplete } from "antd";
import React from "react";

const SearchTextField = ({
  containerStyle,
  value,
  options,
  inputStyle,
  onSelect,
  onSearch,
  onChange,
  placeholder,
  allowClear = true,
  notFoundContent = true,
  size,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <AutoComplete
        allowClear={allowClear}
        value={value}
        notFoundContent={notFoundContent}
        options={options}
        style={inputStyle}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        {...props}
      />
    </div>
  );
};

export default SearchTextField;
