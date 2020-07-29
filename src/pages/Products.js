import React from 'react';
import BannerProduct from '../components/BannerProduct';
import SlideProducts from '../components/SildeProducts';
import { Grid } from '@material-ui/core';

const backgroundImg1 = require('../img/bg-blade-13-pc.jpg');
const backgroundImg2 = require('../img/bg-blade-15-pc.jpg');
const backgroundImg3 = require('../img/bg-blade-15-studio.jpg');
const backgroundImg4 = require('../img/bg-blade-17-pc.jpg');
const Products = ()=>{
    return (
        <Grid className="products" container>
            <Grid item xs={12}>
                <BannerProduct/>
            </Grid>
            <Grid item xs={12}>
                <SlideProducts 
                  name="Sleek high performance gaming laptop with up to 8-Core CPUs and GeForce® graphics." 
                  title="RAZER BLADE 15"
                  backgroundImg={backgroundImg1}
                 />
            </Grid>
            <Grid item xs={12}>
                <SlideProducts 
                  name="The World’s First Gaming Ultrabook." 
                  title="RAZER BLADE STEALTH 13"
                  backgroundImg={backgroundImg2}
                 />
            </Grid>
            <Grid item xs={12}>
                <SlideProducts 
                  name="On-the-go desktop replacement powerhouse built for gaming and intensive applications." 
                  title="RAZER BLADE PRO 17"
                  backgroundImg={backgroundImg4}
                 />
            </Grid>
            <Grid item xs={12}>
                <SlideProducts 
                  name="Thin yet powerful mobile workstation designed with creators in mind." 
                  title="Razer Blade 15 Studio Edition"
                  backgroundImg={backgroundImg3}
                 />
            </Grid>
        </Grid>
    )
}
export default Products;