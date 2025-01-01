import React from "react";
import Switch from '@mui/material/Switch';

const Basic = ({ color, size, onChange, thumb, checked, disabled, containerStyle, sx, ...props }) => {
    return (
        <div style={containerStyle} >
            <Switch
                thumb={thumb}
                color={color}
                disabled={disabled}
                onChange={onChange}
                size={size}
                sx={sx}
                defaultChecked={checked}
                inputProps={{ 'aria-label': 'controlled' }}
                {...props}
            />

        </div>
    )
}

export default Basic;
