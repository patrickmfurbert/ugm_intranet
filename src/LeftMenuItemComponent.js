import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ConstructionIcon from '@mui/icons-material/Construction';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BadgeIcon from '@mui/icons-material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';

function LeftMenuItemComponent({ name, link, subItems, isOpen, setIsOpen }) {

    const isExpandable = subItems && subItems.length > 0;

    const handleExpandContractClick = () => {
        setIsOpen(!isOpen);
    }

    const iconChooser = (name) => {
        switch (name) {
            case "Human Resources": return <Diversity1Icon />;
            case "Quality": return <SquareFootIcon />;
            case "Fabrication": return <PrecisionManufacturingIcon />;
            case "Countertop Installations": return <ConstructionIcon />;
            case "Office Tips": return <BadgeIcon />;
            case "Vehicle Procedures": return <LocalShippingIcon />;
            case "Building Procedures": return <BusinessIcon />;
            default: return <BadgeIcon sx={{ color: 'transparent' }} />
        }
    }

    return (
        <ListItem key={name} disablePadding>
            <ListItemButton
                data-key={name}
                onClick={handleExpandContractClick}
            >
                <ListItemIcon>
                    {iconChooser(name)}
                </ListItemIcon>
                <ListItemText primary={name} />
                {isExpandable && !isOpen && <ExpandMoreIcon />}
                {isExpandable && isOpen && <ExpandLessIcon />}
            </ListItemButton>
        </ListItem>
    );

}

export default LeftMenuItemComponent;