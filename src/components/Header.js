import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Icon from './Icon';

const Header = ()=>{
    return (
        <header>
            <Logo/>
            <Navigation/>
            <Icon/>
        </header>
    )
}
export default Header;