import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


const SlideProducts = ({backgroundImg,title, name})=>{
    return (
        <Grid item >
            <div className="slide-product" style={{backgroundImage:`url(${backgroundImg})`}}>
                <div className="slide-product-content">
                    <h1>{title}</h1>
                    <p>{name}</p>
                    <Link to="/">Learn More &gt;</Link>
                    <Link to="/allproducts">See All Models &gt;</Link>
                </div>
            </div>
        </Grid>
    )
} 
export default SlideProducts;