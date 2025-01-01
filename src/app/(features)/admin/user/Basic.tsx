import { Button, ConfigProvider, ButtonProps } from "antd";
import React, { CSSProperties, forwardRef } from "react";

interface BasicButtonProps extends ButtonProps {
  text?: string;
  containerStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  sx?: CSSProperties; // If `sx` has special significance in your app, otherwise remove it
}

const Basic = forwardRef<HTMLButtonElement, BasicButtonProps>(
  (
    {
      disabled = false,
      icon,
      loading = false,
      shape,
      type,
      size,
      text,
      onClick,
      className,
      containerStyle,
      buttonStyle,
      htmlType,
      ...props
    },
    ref
  ) => (
    <div style={containerStyle}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimaryHover: "green",
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
          size={size} // 'small' | 'default' | 'large'
          type={type}
          onClick={onClick}
          style={buttonStyle}
          className={className}
          ref={ref}
          htmlType={htmlType}
          {...props}
        >
          {text}
        </Button>
      </ConfigProvider>
    </div>
  )
);

Basic.displayName = "Basic";

export default Basic;
