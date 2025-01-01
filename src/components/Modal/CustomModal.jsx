import React from 'react'
import { Modal, Row } from "antd";


const CustomModal = ({
    title,
    className,
    open,
    cancelModal,
    width,
    height,
    centered,
    Children,
    destroyOnClose,
    style
}) => {
    return (


        <Modal
            style={{ paddingTop : '1rem'}}
            title={title}
            wrapClassName={`custom-modal ${className}`}
            open={open}
            height={height}
            closeIcon={false}
            width={width}
            onCancel={cancelModal}
            cancelButtonProps={false}
            footer={null}
            centered={centered}
            destroyOnClose={true}
            closable={false}
        >

            <Row className='w-full'>

                {Children}

            </Row>


        </Modal>



    )
}

export default CustomModal