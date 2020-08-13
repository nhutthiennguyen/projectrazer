import React from 'react';
import { Container } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const banner = require('../img/razer.svg');
const BannerAllProducts = ({ title }) => {
    const matches = useMediaQuery('(min-width:769px)');
    return (
        <Container className="content-banner-all-products">
            <img src={banner} width={200} height={100} alt="razer" />
            {!!matches && <h2>{title}</h2>}
        </Container>

    )
}
export default BannerAllProducts;