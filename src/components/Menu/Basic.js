import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Basic = ({ data, menuIcon, containerStyle, menuSx, itemSx, onClick, vertical, horizontal }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item) => {
        setAnchorEl(null);
        onClick(item.label)
    };

    return (
        <div style={containerStyle}>
            <IconButton
                color="inherit"
                size="small"
                onClick={handleClick}
            >
                {menuIcon || <MoreVertIcon />}
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
                PaperProps={{ sx: { width: 150, ...menuSx } }}
                anchorOrigin={{
                    vertical: vertical || "top", //top | bottom | center
                    horizontal: horizontal || "left" // left | right | center
                }}
            >
                {data.map((item, ind) => {
                    return (
                        item?.divider ?
                            <Divider key={ind} />
                            :
                            <MenuItem sx={itemSx} key={ind} onClick={() => handleClose(item)}>{item.label}</MenuItem>
                    )
                })}
            </Menu>
        </div>
    );
}

export default Basic
