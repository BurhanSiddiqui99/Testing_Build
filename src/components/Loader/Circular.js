import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Spin } from 'antd';

import { connect } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const Circular = ({ size, color, sx, loaderStyle, containerStyle, ...props }) => {
    return (
        <div style={containerStyle}>
            {/* <CircularProgress
                sx={sx}
                size={size} //Number
                color={color} //secondary | success | inherit
                style={loaderStyle}
                {...props}
            /> */}
            <Spin style={{color: 'red' , display:'flex', justifyContent:'center', alignItems:'center'}} indicator={<LoadingOutlined spin />} size={size} />

        </div>
    );
}

export default Circular