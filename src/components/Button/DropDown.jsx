import { DownOutlined } from '@ant-design/icons';
import { Dropdown,Space } from 'antd';

import React from 'react'

// const items = [
//     {
//         label: <a href="https://www.antgroup.com">1st menu item</a>,
//         key: '0',
//     },
//     {
//         label: <a href="https://www.aliyun.com">2nd menu item</a>,
//         key: '1',
//     },
//     {
//         type: 'divider',
//     },
//     {
//         label: '3rd menu item',
//         key: '3',
//     },
// ];


const DropDown = ({items,trigger}) => {
    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={[trigger]}
            
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Click me
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
}

export default DropDown


