import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import LeftMenuItem from './LeftMenuItem';
import React from 'react';

const drawerWidth = 300;
const items = [
    {
        name: 'Human Resources',
        link: null,
        subItems: [
            {
                name: 'Benefits',
                link: null,
                subItems: null,
            },
            {
                name: 'Policies',
                link: null,
                subItems: null,
            },
            {
                name: 'Handbooks',
                link: null,
                subItems: null,
            },

        ]
    },
    {
        name: 'Quality',
        link: null,
        subItems: [
            {
                name: 'Standards',
                link: null,
                subItems: null,
            },
        ]
    },
    {
        name: 'Fabrication',
        link: null,
        subItems: [
            {
                name: 'Tools',
                link: null,
                subItems: null,
            },
            {
                name: 'Safety',
                link: null,
                subItems: null,
            },
            {
                name: 'Procedures',
                link: null,
                subItems: null,
            },
        ]
    },
    {
        name: 'Countertop Installations',
        link: null,
        subItems: [
            {
                name: 'Procedures',
                link: null,
                subItems: null,
            },
        ]
    },
    {
        name: 'Office Tips',
        link: null,
        subItems: [
            {
                name: 'FAQ',
                link: null,
                subItems: null,
            },
            {
                name: 'How-toos',
                link: null,
                subItems: null,
            },
        ]
    },
    {
        name: 'Building Procedures',
        link: null,
        subItems: [
            {
                name: 'FAQ',
                link: null,
                subItems: null,
            },
        ]
    },    
    {
        name: 'Vehicle Procedures',
        link: null,
        subItems: [
            {
                name: 'FAQ',
                link: null,
                subItems: null,
            },
        ]
    },
    {
        name: 'External Links',
        link: null,
        subItems: [
            {
                name: 'Blanco Sinks',
                link: 'https://www.blanco.com/us-en/',
                subItems: null,
            },
            {
                name: 'Pelican',
                link: 'https://www.pelicansinks.com/',
                subItems: null,
            },
            {
                name: 'MSI',
                link: 'https://www.msisurfaces.com/customer-portal/',
                subItems: null,
            },
            {
                name: 'Moraware',
                link: 'https://upstategranitemarble.moraware.net/go',
                subItems: null,
            },
            {
                name: 'Production Schedule',
                link: 'https://docs.google.com/spreadsheets/d/1bfD6CR-zKjY4sJYLwjTLAuH2chpB9x6QePcEId3S2tI/edit',
                subItems: null,
            },
            {
                name: 'Customer Visits',
                link: 'https://docs.google.com/spreadsheets/d/1wnRIU7E5W7c2f0MKVy1F2UqNZbIhWTihZY5hWXQsR8Q/edit#gid=0',
                subItems: null,
            },
            {
                name: 'Speed Label',
                link: 'https://www.fifthgeartech.com/app/speedlabel/login',
                subItems: null,
            },
            {
                name: 'Limbel',
                link: 'https://auth.limblecmms.com/',
                subItems: null,
            }
        ]
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
                        items.map(item => (
                            <LeftMenuItem 
                                menuItem={item}
                                />
                        ))
                    }
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default LeftMenu;