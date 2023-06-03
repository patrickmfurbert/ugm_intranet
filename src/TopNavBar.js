import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import UGMWhiteLogo from './asssets/UGM_Logo_White.png'
import { useTheme } from '@mui/material/styles';


function TopNavbar({setColorMode}) {

    const theme = useTheme();

    return (
        <React.Fragment>

            <AppBar
                position="fixed"
                sx={{
                    zIndex: 1400,
                }}
            >

                <Toolbar>
                    <img
                        src={UGMWhiteLogo}
                        alt="logo"
                        style={{ maxHeight: 64, maxWidth: 64 }} />

                    <Typography variant="h6" noWrap component="div" sx={{ ml: 3, flexGrow: 1 }}>
                        Intranet
                    </Typography>

                        <IconButton onClick={() => setColorMode()} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
}

export default TopNavbar;