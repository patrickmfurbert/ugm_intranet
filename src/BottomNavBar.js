import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ScrollingText from './ScrollingText';

import React from 'react';

const drawerWidth = 240;

function BottomNavBar() {

    return (
        <React.Fragment>

            <AppBar
                position="fixed"
                sx={{
                    bottom: 0,
                    top: 'auto',
                    backgroundColor: '#3c3c3c',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <ScrollingText />
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

export default BottomNavBar;