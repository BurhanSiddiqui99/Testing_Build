'use client';
import React from "react";
import { Row, Col, Input } from "antd";
import Button from "../Button";
import './index.css'



const ModalCommentBody = ({
  isCommentModal,
}) => {
  const { TextArea } = Input;
    console.log('isCommentModal: ', isCommentModal);
  return (
    <Row justify="center" align="middle" className="commentModalBody">
      <Col span={24}>
        <TextArea
          maxLength={isCommentModal?.commentBoxMaxLength}
          showCount={isCommentModal?.commentBoxShowLenth}
          rows={isCommentModal?.commentBoxRows}
        />
      </Col>
      <Col span={24} className="centerItem">
        <Button.Basic text={isCommentModal?.btnSubmitText} className='commentModalSubmit'/>
      </Col>
    </Row>
  );
};

export default ModalCommentBody;
