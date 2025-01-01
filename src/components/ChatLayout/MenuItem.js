import { Image } from 'antd';
import React from 'react';

const MenuItem = ({ iconSrc, iconAlt, text }) => {
    return (
        <div className="box">
            <div className="icon-wrapper">
                <Image src={iconSrc} alt={iconAlt} />
            </div>
            <span className="icon-text">{text}</span>
        </div>
    );
};

export default MenuItem;