import { Col, Modal, Row } from "antd";
import React from "react";

import Button from "../Button";
import Text from "../Text";

const Basic = ({
  title = "Sample Modal",
  description,
  open,
  closeable = true,
  className,
  onCancel,
  fontFamily,
  fontSize = 18,
  gutter = [0, 24],
  leftButtonText,
  rightButtonText,
  onClickLeft,
  onClickRight,
  loading,
}) => {
  if (open) {
    return (
      <Modal
        open={true}
        className={className}
        onCancel={onCancel}
        closable={closeable}
        footer={null}
      >
        <Row gutter={gutter} justify="center">
          <Col span={24}>
            <Row justify="center">
              <Col>
                <Text.Basic
                  fontFamily={fontFamily}
                  fontSize={fontSize}
                  text={title}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[0, 5]}>
              <Text.Basic
                fontFamily={fontFamily}
                fontSize={fontSize}
                text={description}
              />
            </Row>
          </Col>
          <Col span={24}>
            <Row justify={"center"}>
              <Col>
                <Button.Basic
                  text={leftButtonText}
                  onClick={onClickLeft}
                  size="large"
                />
              </Col>
              <Col offset={1}>
                <Button.Basic
                  type="primary"
                  size={"large"}
                  text={rightButtonText}
                  onClick={onClickRight}
                  disabled={loading}
                  isShowLoader={loading}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  } else {
    return <></>;
  }
};
export default Basic;
