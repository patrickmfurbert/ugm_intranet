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
                                name={item.name} 
                                link={item.link} 
                                subItems={item.subItems}
                                />
                        ))
                    }
                </List>
            </Drawer>


        </React.Fragment>
    );
}

export default LeftMenu;