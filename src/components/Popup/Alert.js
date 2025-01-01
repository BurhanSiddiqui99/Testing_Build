import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BasicAlert = ({ severity, title, containerStyle, alertStyle, sx, actionButton, onClickAction, ...props }) => (
    <div style={containerStyle}>
        <Alert
            severity={severity} //error //warning //info //success
            action={
                <IconButton
                    color="inherit"
                    size="small"
                    onClick={onClickAction}
                >
                    {actionButton || <CloseIcon fontSize="inherit" />}
                </IconButton>
            }
            sx={sx}
            style={{ width: 200, ...alertStyle }}
        >
            {title}
        </Alert>
    </div>
)

export default BasicAlert;
