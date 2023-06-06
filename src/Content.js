import Box from '@mui/material/Box';
import TopNavBar from "./TopNavBar";
import React from 'react';
import LeftMenu from './LeftMenu';
import SplashArea from './SplashArea';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



function Content() {
    const [mode, setMode] = React.useState('dark');

    const toggleDarkLight = () => {
        mode === 'dark' ? setMode('light') : setMode('dark');
        console.log(mode);
    }

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <TopNavBar setColorMode={toggleDarkLight} />
                        <LeftMenu />
                        <SplashArea />
                    </Box >
                </React.Fragment>
            </ThemeProvider>
    );
}

export default Content;