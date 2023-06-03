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
import React from 'react';

const drawerWidth = 300;
const linkData = [
    {
        name: 'Human Resources',
    },
    {
        name: 'Quality',
    },
    {
        name: 'Fabrication',
    },
    {
        name: 'Countertop Installations',
    },
    {
        name: 'Office Tips',
    },
]

function LeftMenu() {
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
                                <ListItemButton>
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
        </React.Fragment>
    );
}

export default LeftMenu;