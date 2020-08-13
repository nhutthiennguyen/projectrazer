import React from 'react';
import { Grid } from '@material-ui/core';
import GalleryComponent from './GalleryComponent';
const backgroundImg1 = require('../img/gallery1.jpg');
const backgroundImg2 = require('../img/gallery2.jpg');
const backgroundImg3 = require('../img/gallery3.jpg');
const backgroundImg4 = require('../img/gallery4.jpg');
const backgroundImg5 = require('../img/gallery5.jpg');
const backgroundImg6 = require('../img/gallery6.jpg');

const Gallery = () => {
    return (
        <Grid className="gallery" container spacing={0}>
            <Grid item xs={12} sm={6} lg={6}>
                <GalleryComponent backgroundImg={backgroundImg1} title="enjoy savings of $100" name="shop razer blade steath 13" />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <GalleryComponent backgroundImg={backgroundImg2} title="true rgb gaming" name="shop razer cynosa v2" />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <GalleryComponent backgroundImg={backgroundImg3} title="enjoy savings of $100" name="shop razer blade steath 13" />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <GalleryComponent backgroundImg={backgroundImg4} title="true rgb gaming" name="shop razer cynosa v2" />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <GalleryComponent backgroundImg={backgroundImg5} title="enjoy savings of $100" name="shop razer blade steath 13" />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
                <GalleryComponent backgroundImg={backgroundImg6} title="true rgb gaming" name="shop razer cynosa v2" />
            </Grid>
        </Grid>

    )
}
export default Gallery;