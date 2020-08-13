import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Icon from './Icon';
import Hamburger from './Hamburger';
import SubMenu from './SubMenu';
import { useMediaQuery } from '@material-ui/core';

const Header = () => {
    const [isDisplay, setIsDisplay] = React.useState(false);
    const handleClick = () => {
        setIsDisplay(!isDisplay)
        console.log('click')
    }
    const matches = useMediaQuery('(min-width:769px)');
    return (
        <header>
            {!matches && <Hamburger onClick={handleClick} />}
            {!!isDisplay && <SubMenu />}
            <Logo />
            {!!matches && <Navigation />}
            <Icon />
        </header>
    )
}
export default Header;