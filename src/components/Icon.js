import React from 'react';
import {IconButton} from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Icon = ()=>{
    return (
        <div className="icon">
            <IconButton>
                <PersonOutlineOutlinedIcon/>
            </IconButton>
            <IconButton>
                <ShoppingCartOutlinedIcon/>
            </IconButton>
        </div>
    )
}
export default Icon;