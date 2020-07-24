import React from 'react';
import {Link} from 'react-router-dom';
import {IconButton, Tooltip} from '@material-ui/core';
import logo from '../img/razer.svg';

const Logo = ()=>{
    return (
        <div className="Logo">
            <Tooltip title="Home">
                <IconButton component={Link} to="/" tooltip="Home">
                    <img src={ logo } alt="Razer" width={100} height={90} />
                </IconButton>
            </Tooltip>
        </div>
    )
}
export default Logo;