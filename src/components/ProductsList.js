import React from 'react';
import {Link} from 'react-router-dom';
import {Grid } from '@material-ui/core';



const ProductsList = ({title, img, name, core, windows, display, card, memory, price})=>{
    
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} className="cart">
        
            <div className="cart-img">
                <Link to="#"><img src={img} alt="laptop" /></Link>
            </div>
            <div className="cart-title">{title}</div>
            <div className="cart-content">
                <h6>{name}</h6>
                <ul>
                    <li>{core}</li>
                    <li>{windows}</li>
                    <li>{display}</li>
                    <li>{card}</li>
                    <li>{memory}</li>
                </ul>
                 
                <Link to="#"><h6>{price}<span>&gt;</span></h6></Link>
            </div>
            
        </Grid>
    )
}
export default ProductsList;