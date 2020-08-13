import React from 'react';
import Slide from '../components/Slide';
import Gallery from '../components/Gallery';
import { Grid } from '@material-ui/core';
import {useMediaQuery} from '@material-ui/core';

const backgroundImg1 = require('../img/bg1-pc.jpg');
const backgroundImg2 = require('../img/bg2-pc.jpg');
const backgroundImg3 = require('../img/bg3-pc.jpg');
const backgroundImg1Mobile = require('../img/bg1-mobile.jpg');
const backgroundImg2Mobile = require('../img/bg2-mobile.jpg');
const backgroundImg3Mobile = require('../img/bg3-mobile.jpg');
const Homepage =()=>{
    const matches = useMediaQuery('(min-width:769px)');
    return (
        
        <Grid container  >
            <Grid item xs={12} >
                <Slide 
                    name="Shop razer blade 15" 
                    title="MORE POWER. SAVINGS OF $100"
                    backgroundImg={matches ? backgroundImg1 : backgroundImg1Mobile }
                /> 
            </Grid>
            <Grid item xs={12} >
                <Slide 
                    name="Shop razer huntsman mini" 
                    title="DOMINATE ON A DIFFERENT SCALE"
                    backgroundImg={matches ? backgroundImg2 : backgroundImg2Mobile }
                />
            </Grid>
            <Grid item xs={12}>
                <Slide 
                    name="shop razer kishi" 
                    title="make your move"
                    backgroundImg={matches ? backgroundImg3 : backgroundImg3Mobile }
                />
            </Grid>
                 <Gallery/>
        </Grid>
        
         
        
    )
}
export default Homepage;