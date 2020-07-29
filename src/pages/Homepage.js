import React from 'react';
import Slide from '../components/Slide';
import Gallery from '../components/Gallery';
import { Grid } from '@material-ui/core';


const backgroundImg1 = require('../img/bg1-pc.jpg');
const backgroundImg2 = require('../img/bg2-pc.jpg');
const backgroundImg3 = require('../img/bg3-pc.jpg');
const Homepage =()=>{
    return (
        
        <Grid container  >
            <Grid item xs={12} >
                <Slide 
                    name="Shop razer blade 15" 
                    title="MORE POWER. SAVINGS OF $100"
                    backgroundImg={backgroundImg1}
                /> 
            </Grid>
            <Grid item xs={12} >
                <Slide 
                    name="Shop razer huntsman mini" 
                    title="DOMINATE ON A DIFFERENT SCALE"
                    backgroundImg={backgroundImg2}
                />
            </Grid>
            <Grid item xs={12}>
                <Slide 
                    name="shop razer kishi" 
                    title="make your move"
                    backgroundImg={backgroundImg3}
                />
            </Grid>
                 <Gallery/>
        </Grid>
        
         
        
    )
}
export default Homepage;