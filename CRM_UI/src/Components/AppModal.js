import { Modal } from 'antd';
import React from 'react';

const AppModal = () => {
    return (
        <div>
            <Modal
                {...props}
                open={open}
                title={title}
                onOk={onOk}
                bodyStyle={{ height: height }}
                style={{ borderRadius: '7px' }}
                footer={footer}
                destroyOnClose
                width={width}
                onCancel={onCancel}
            >
                {children}
            </Modal>
        </div>
    );
}

export default AppModal;