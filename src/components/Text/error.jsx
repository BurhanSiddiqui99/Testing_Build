import React from "react";
import styled from "styled-components";

function Error(props) {
  return <Text {...props}>{props.text}</Text>;
}

export default Error;

const Text = styled.span`
  font-size: 14px;
  color: red;
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: 400;
  margin-top: ${(props) => props.marginTop || 0}px;
`;
