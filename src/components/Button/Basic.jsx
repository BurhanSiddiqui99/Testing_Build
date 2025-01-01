import { Button, ConfigProvider } from "antd";
import React from "react";

const Basic = ({
  disabled,
  icon,
  loading,
  shape,
  type,
  size,
  color,
  text,
  onClick,
  className,
  containerStyle,
  buttonStyle,
  ref,
  sx,
  htmlType,
  ...props
}) => (
  <div style={containerStyle}>

    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: 'green',
          controlHeight: 33,
          lineHeight: 0,
          lineWidth: 0,
        },
      }}
    >
      <Button
        disabled={disabled}
        icon={icon}
        loading={loading}
        shape={shape}
        size={size} // 'small'| 'medium'| 'large'
        type={type}
        color={color}
        onClick={onClick}
        style={buttonStyle}
        className={className}
        ref={ref}
        {...props}
        htmlType={htmlType}
      >
        {text}
      </Button>
    </ConfigProvider>

  </div>
);

export default Basic;
