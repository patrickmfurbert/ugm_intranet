import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

const drawerWidth = 200;
const linkData = [
    {
        name: 'Blanco Sinks',
        href: 'https://www.blanco.com/us-en/'
    },
    {
        name: 'Pelican',
        href: 'https://www.pelicansinks.com/'
    },
    {
        name: 'MSI',
        href: 'https://www.msisurfaces.com/customer-portal/'
    },
    {
        name: 'Moraware',
        href: 'https://upstategranitemarble.moraware.net/go'
    },
    {
        name: 'Production Schedule',
        href: 'https://docs.google.com/spreadsheets/d/1bfD6CR-zKjY4sJYLwjTLAuH2chpB9x6QePcEId3S2tI/edit'
    },
    {
        name: 'Customer Visits',
        href: 'https://docs.google.com/spreadsheets/d/1wnRIU7E5W7c2f0MKVy1F2UqNZbIhWTihZY5hWXQsR8Q/edit#gid=0'
    },
    {
        name: 'Speed Label',
        href: 'https://www.fifthgeartech.com/app/speedlabel/login'
    },
    {
        name: 'Limbel',
        href: 'https://auth.limblecmms.com/'
    }

]

function RightMenu() {
    return (
        <React.Fragment>
            {/* Right Drawer */}
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
                anchor="right"
            >
                <Toolbar></Toolbar>
                <List>
                    {linkData.map(data => (
                        <ListItem key={data.name} disablePadding>
                            <ListItemButton href={data.href}>
                                <ListItemText primary={data.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default RightMenu;

