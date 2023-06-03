import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import UGMWhiteLogo from './asssets/UGM_Logo_White.png'

function TopNavbar() {

    return (
        <React.Fragment>

            <AppBar
                position="fixed"
                sx={{
                    backgroundColor:'#3c3c3c',
                    zIndex: 1400,
                }}
            >

                <Toolbar>
                    <img 
                        src={UGMWhiteLogo} 
                        alt="logo" 
                        style={{maxHeight: 64, maxWidth: 64}} />

                    <Typography variant="h6" noWrap component="div" sx={{ml:3}}>
                        Intranet
                    </Typography>
                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
}

export default TopNavbar;