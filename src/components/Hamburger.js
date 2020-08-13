import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

const Hamburger = props => {
    return (
        <div className="hamburger">
            <IconButton onClick={props.onClick}>
                <MenuIcon />
            </IconButton>
        </div>
    );
}
export default Hamburger;