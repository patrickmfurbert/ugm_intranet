import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./TopNavBar";
import React from 'react';
import BottomNavBar from './BottomNavBar';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import SplashArea from './SplashArea';

function Content() {
    return (

        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Navbar />
                <LeftMenu />
                <SplashArea />
                <RightMenu />
                <BottomNavBar />
            </Box >
        </React.Fragment>
    );
}

export default Content;