import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const BasicDrawer = ({ data, position, drawerIcon, onClick, containerStyle, listSx, itemSx, ...props }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={listSx}>
                {data.map((item, index) => (
                    item?.divider ?
                        <Divider key={index}/>
                        :
                        <ListItem
                            button
                            key={item.label}
                            onClick={() => onClick(item.label)}
                            sx={itemSx}
                        >
                            {item?.icon ?
                                <ListItemIcon>
                                    {item?.icon}
                                </ListItemIcon>
                                :
                                null
                            }
                            <ListItemText primary={item.label} />
                        </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div style={containerStyle}>
            <IconButton
                color="inherit"
                size="small"
                onClick={toggleDrawer(position, true)}
            >
                {drawerIcon || <MenuIcon />}
            </IconButton>
            <Drawer
                anchor={position}
                open={state[position]}
                onClose={toggleDrawer(position, false)}
            >
                {list(position)}
            </Drawer>
        </div>
    )
}
export default BasicDrawer;
