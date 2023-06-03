import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ConstructionIcon from '@mui/icons-material/Construction';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Drawer from '@mui/material/Drawer';
import React from 'react';

const drawerWidth = 240;

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

                    <ListItem key="Human Resources" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Diversity1Icon />
                            </ListItemIcon>
                            <ListItemText primary="Human Resources" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key="Quality" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SquareFootIcon />
                            </ListItemIcon>
                            <ListItemText primary="Quality" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key="Fabrication" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PrecisionManufacturingIcon />
                            </ListItemIcon>
                            <ListItemText primary="Fabrication" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key="Installations" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ConstructionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Installations" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default LeftMenu;