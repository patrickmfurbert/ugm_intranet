import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ConstructionIcon from '@mui/icons-material/Construction';
import BadgeIcon from '@mui/icons-material/Badge';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const drawerWidth = 300;
const linkData = [
    {
        name: 'Human Resources',
        subLinks: [
            'Benefits',
            'Policies',
            'Handbook',
        ]
    },
    {
        name: 'Quality',
        subLinks: [
            'Standards',
        ]
    },
    {
        name: 'Fabrication',
        subLinks: [
            'Tools',
            'Safety',
            'Procedures',
        ]
    },
    {
        name: 'Countertop Installations',
        subLinks: [
            'Procedures',
        ]
    },
    {
        name: 'Office Tips',
        subLinks: [
            'FAQ',
            'How too',
        ]
    },
]

function LeftMenu() {
    const [anchorElement, setAnchorElement] = React.useState(null);
    const [dataKeyForSubLinksMenu, setDataKeyForSubLinksMenu] = React.useState(null);

    const open = Boolean(anchorElement);
    const handleClick = (event) => {
        setAnchorElement(event.currentTarget);
        setDataKeyForSubLinksMenu(event.currentTarget.getAttribute('data-key'));
        console.log('clicked');
        console.log(event.currentTarget.getAttribute('data-key'));
    };
    const handleClose = () => {
        setAnchorElement(null);
    };

    return (
        <React.Fragment>
            {/* Left Drawer */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar></Toolbar>
                <List>
                    {
                        linkData.map(item => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton
                                    data-key={item.name}
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}>
                                    <ListItemIcon>
                                        {item.name === 'Human Resources' && <Diversity1Icon />}
                                        {item.name === 'Quality' && <SquareFootIcon />}
                                        {item.name === 'Fabrication' && <PrecisionManufacturingIcon />}
                                        {item.name === 'Countertop Installations' && <ConstructionIcon />}
                                        {item.name === 'Office Tips' && <BadgeIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorElement}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >

                {
                    Boolean(anchorElement) && (linkData.filter(data => data.name === dataKeyForSubLinksMenu)).map(data => ( data.subLinks.map( link =>
                        <MenuItem onClick={handleClose}>{link}</MenuItem>    
                    )))
                }

                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </React.Fragment>
    );
}

export default LeftMenu;