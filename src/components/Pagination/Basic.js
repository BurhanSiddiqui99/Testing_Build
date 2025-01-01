import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Basic = ({ count, onChange, color, disabled, variant, shape, size, defaultPage, boundaryCount, siblingCount, renderItem, sx, containerStyle, paginationStyle, ...props }) => {

    return (
        <div style={containerStyle} >

            <Stack spacing={2}>
                <Pagination
                    count={count}
                    onChange={onChange}
                    color={color} //primary //secondary
                    disabled={disabled}
                    variant={variant} //outlined
                    shape={shape} //rounded //circular
                    size={size} //large
                    defaultPage={defaultPage}
                    boundaryCount={boundaryCount}
                    siblingCount={siblingCount}
                    renderItem={renderItem}
                    style={paginationStyle}
                    sx={sx}
                    {...props}
                />

            </Stack>


        </div>
    )
}

export default Basic;
