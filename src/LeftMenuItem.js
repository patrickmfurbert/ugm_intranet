import React from 'react';
import List from '@mui/material/List';
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
import { Collapse } from '@mui/material';

function LeftMenuItem({ name, link, subItems }) {

    const [isOpen, setIsOpen] = React.useState(false);
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
            default: return <BadgeIcon sx={{ color: 'transparent' }} />
        }

    }

    const TopLevelItem = (
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
    )

    const ChildItems = (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List>
                {subItems.map(item => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {iconChooser(item.name)}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Collapse>
    )

    return (
        <React.Fragment>
            {/* Top level Item */}
            {TopLevelItem}
            {/* Child Items if any - depends on if the section has been open*/}
            {isExpandable && isOpen && ChildItems}
        </React.Fragment>
    );
}

export default LeftMenuItem;