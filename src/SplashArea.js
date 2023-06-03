import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LoremPaper from './LoremPaper';

function SplashArea(){
    return(
        <React.Fragment>
            <Box component="main" sx={{ p: 3 }}>

                {/* Spacing for top nav bar */}
                <Toolbar /> 

                {/* Creates Lorem Text Examples */}
                {[...Array(3)].map((element, index) => (
                    <LoremPaper key={index}/>
                ))}

            </Box>
        </React.Fragment>
    );
}

export default SplashArea;