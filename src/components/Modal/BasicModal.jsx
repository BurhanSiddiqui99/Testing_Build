'use client';
import React from "react";
import { Col, Modal, Row, ConfigProvider } from "antd";
import Button from "../Button";
import BasicModalBody from "./BasicModalBody";
import ModalCommentBody from "./CommentModalBody";

const BasicModal = ({
  modalType,
  title,
  className,
  onCancel,
  closeable,
  text,
  isModalOpen,
  leftButtonText,
  leftButtonStyle,
  onClickLeft,
  rightButtonText,
  rightButtonStyle,
  onClickRight,
  btnLoadingLeft,
  loadingLeft,
  btnLoadingRight,
  loadingRight,
  isFooter,
  isCommentModal,
  descriptionStyle,
  centered,
  width
}) => {
  console.log("description: ", title);

  return (
    <Modal
      className={`basicModal ${className}`}
      title={title}
      open={isModalOpen}
      onCancel={onCancel}
      centered={centered}
      closable={closeable}
      width={width}
      footer={[
        isFooter ? (
          <Row gutter={24}>

            {/* <ConfigProvider
              theme={{
                token: {
                  colorPrimaryHover: '',
                  controlHeight: 33,
                  lineHeight: 0,
                  lineWidth: 0,
                },
              }}
            > */}
              <Col span={12}>


                <Button.Basic
                  className='footer-action footer-btn-1 w-full h-12'
                  style={leftButtonStyle}
                  text={leftButtonText}
                  onClick={onClickLeft}
                  disabled={btnLoadingLeft}
                  isShowLoader={loadingLeft}
                  size="large"
                />

              </Col>
              <Col span={12}>
                <Button.Basic
                  className="footer-action footer-btn-2 w-full h-12"
                  type="primary"
                  size={"large"}
                  style={rightButtonStyle}
                  text={rightButtonText}
                  onClick={onClickRight}
                  disabled={btnLoadingRight}
                  isShowLoader={loadingRight}
                />

              </Col>
            {/* </ConfigProvider> */}
          </Row>
        ) : null,
      ]}
    >
      {modalType === "basicModal" ? (
        <BasicModalBody description={text} descriptionStyle={descriptionStyle} />
      ) : modalType == "commentModal" ? (
        <ModalCommentBody isCommentModal={isCommentModal} />
      ) : (
        ""
      )}
    </Modal>
  );
};

export default BasicModal;
