import React from 'react';
import MenuItem from './MenuItem';

const SideMenu = () => {
    const menuItems = [
        { iconSrc: 'icon1.png', iconAlt: 'Profile Icon 1', text: 'Profile' },
        { iconSrc: 'icon2.png', iconAlt: 'Profile Icon 2', text: 'Profile' },
        { iconSrc: 'icon3.png', iconAlt: 'Profile Icon 3', text: 'Profile' },
    ];

    return (
        <div className="side-menu">
            {menuItems.map((item, index) => (
                <MenuItem key={index} iconSrc={item.iconSrc} iconAlt={item.iconAlt} text={item.text} />
            ))}
        </div>
    );
};

export default SideMenu;