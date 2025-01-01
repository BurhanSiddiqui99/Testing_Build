import React from "react";
import styled from "styled-components";

import { Colors } from "../../config";

function Basic(props) {
  return <Text {...props} className={props.className}>{props.text}</Text>;
}

export default Basic;

const Text = styled.span`
  font-size: ${(props) => props.fontSize || 24}px;
  color: ${(props) => props.color || Colors.TextColor};
  font-family: ${(props) => props.fontFamily && props.fontFamily};
  font-weight: ${(props) => props.fontWeight || 400};
  text-align: ${(props) => props.textAlign || "center"};
`;
