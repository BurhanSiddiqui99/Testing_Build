'use client';
import React from 'react';
import { Col, Modal, Row } from 'antd';
import Button from './Basic';

interface BasicModalProps {
  modalType: 'basicModal' | 'commentModal';
  title: string;
  className?: string;
  onCancel: () => void;
  closeable?: boolean;
  text?: string;
  isModalOpen: boolean;
  leftButtonText?: string;
  leftButtonStyle?: React.CSSProperties;
  onClickLeft?: () => void;
  rightButtonText?: string;
  rightButtonStyle?: React.CSSProperties;
  onClickRight?: () => void;
  btnLoadingLeft?: boolean;
  loadingLeft?: boolean;
  btnLoadingRight?: boolean;
  loadingRight?: boolean;
  isFooter?: boolean;
  isCommentModal?: boolean;
  descriptionStyle?: React.CSSProperties;
  centered?: boolean;
  width?: string | number;
}

const BasicModal: React.FC<BasicModalProps> = ({
  modalType,
  title,
  className = '',
  onCancel,
  closeable = true,
  text,
  isModalOpen,
  leftButtonText,
  leftButtonStyle,
  onClickLeft,
  rightButtonText,
  rightButtonStyle,
  onClickRight,
  btnLoadingLeft = false,
  loadingLeft = false,
  btnLoadingRight = false,
  loadingRight = false,
  isFooter = true,
  isCommentModal = false,
  descriptionStyle,
  centered = true,
  width = 520,
}) => {
  console.log('description: ', title);

  return (
    <Modal
      className={`basicModal ${className}`}
      title={title}
      open={isModalOpen}
      onCancel={onCancel}
      centered={centered}
      closable={closeable}
      width={width}
      footer={
        isFooter ? (
          <Row gutter={24}>
            <Col span={12}>
              <Button
                className="footer-action footer-btn-1 w-full h-12"
                style={leftButtonStyle}
                text={leftButtonText}
                onClick={onClickLeft}
                disabled={btnLoadingLeft}
                // isShowLoader={loadingLeft}
                size="large"
              />
            </Col>
            <Col span={12}>
              <Button
                className="footer-action footer-btn-2 w-full h-12"
                type="primary"
                size="large"
                style={rightButtonStyle}
                text={rightButtonText}
                onClick={onClickRight}
                disabled={btnLoadingRight}
                // isShowLoader={loadingRight}
              />
            </Col>
          </Row>
        ) : null
      }
    >
      {text}
    </Modal>
  );
};

export default BasicModal;
