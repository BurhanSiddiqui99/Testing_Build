import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

const Basic = ({ containerStyle, variant, width, height, animation, sx, ...props }) => {
    return (
        <div style={containerStyle}>
            <Skeleton
                variant={variant} //text //circular //rectangular
                width={width}
                height={height}
                animation={animation}
                sx={sx}
                {...props}
            />
        </div>
    )
}

export default Basic;
