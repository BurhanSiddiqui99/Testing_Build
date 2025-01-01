'use client';
import React from "react";
import { Row, Col } from "antd";


const BasicModalBody = ({ description,descriptionStyle }) => {
  return (
    <Row>
      <Col span={24}>
        <p className="descriptionPara" style={descriptionStyle}>{description}</p>
      </Col>
    </Row>
  );
};

export default BasicModalBody;
