import { Input } from "antd";
import React from "react";
import styled, { css } from "styled-components";

import { Colors } from "../../config";
import Text from "../Text";

const StyledInput = styled(Input).attrs({ className: "inputField" })`
  ${(props) =>
    !props.password
      ? css`
&[type], input {
    background-color: ${props.bgColor ? props.bgColor : Colors.LightGray};
    color: ${props.color ? props.color : "gray"};
    border: none;
    //grey 66;
    border-radius: 10;
}
& .ant-input-disabled{
  color:black;
}
&[type]:hover, input:hover {
  text-decoration:none
  border: none;
 
 border-color: grey !important;
}
&[type]:focus, input:focus {
  border: none;
 
  border-color: grey !important;
  /* box-shadow: 0 0 0 2px red66; */
  box-shadow: none;
}
/* * {
  color: grey;
} */
`
      : css`
          & {
            background-color: ${Colors.LightWhite};
            border: none;
            border-bottom: 1px solid #f5f5f5;
            border-radius: 10;
            align-items: center;
          }
          &:before {
            width: 0;
            visibility: hidden;
            content: "\a0";
            line-height: 0;
          }
          input {
            color: grey;
          }
          &:hover {
            border: none;
            // border-bottom: 1px solid grey;
            // border-color: grey !important;
          }
          &:focus,
          &.ant-input-affix-wrapper-focused {
            border: none;
            // border-bottom: 1px solid grey;
            // border-color: grey !important;
            /* box-shadow: 0 0 0 2px 66; */
            box-shadow: none;
          }
          * {
            color: grey;
          }
        `}/* &.lightBg {
    background-color: rgba(255, 255, 255, 0.5);
} */
`;

const Basic = (props) => {
  return props.password ? (
    <>
      {props.label && (
        <Text.Basic text={props.label} textAlign={"right"} fontSize={"16px"} />
      )}
      <StyledInput as={Input.Password} onChange={props.onChange} {...props}></StyledInput>
      {props.errorText && <Text.Error text={props.errorText} />}
    </>
  ) : (
    <>
      {props.label && (
        <Text.Basic text={props.label} textAlign={"right"} fontSize={"16px"} />
      )}
      <StyledInput {...props}></StyledInput>
      {props.errorText && <Text.Error text={props.errorText} />}
    </>
  );
};

export default Basic;
