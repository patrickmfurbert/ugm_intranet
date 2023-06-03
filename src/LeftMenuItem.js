import React from 'react';
import List from '@mui/material/List';
import LeftMenuItemComponent from './LeftMenuItemComponent';
import { Collapse } from '@mui/material';

function LeftMenuItem({ menuItem }) {

    const [isOpen, setIsOpen] = React.useState(false);
    const isExpandable = menuItem.subItems && menuItem.subItems.length > 0;

    const TopLevelItem = (
        <LeftMenuItemComponent
            name={menuItem.name}
            link={menuItem.link}
            subItems={menuItem.subItems}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    )

    const ChildItems = (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List>
                {menuItem.subItems.map(item => (
                    <LeftMenuItemComponent
                        name={item.name}
                        link={item.link}
                        subItems={item.subItems}
                    />
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