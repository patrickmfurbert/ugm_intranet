import Box from '@mui/material/Box';
import Navbar from "./TopNavBar";
import React from 'react';
import BottomNavBar from './BottomNavBar';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import SplashArea from './SplashArea';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Content() {
    return (
        <ThemeProvider theme={darkTheme}>
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
        </ThemeProvider>
    );
}

export default Content;