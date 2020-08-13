import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';



const ProductsList = ({ id, title, img, name, core, windows, display, card, memory, price, setGrid }) => {

    return (
        <Grid item xs={12} sm={!!setGrid ? 12 : 6} md={!!setGrid ? 12 : 4} lg={!!setGrid ? 12 : 4} className={setGrid ? "cart-res" : "cart"}>

            <div className={setGrid ? "cart-res-img" : "cart-img"}>
                <Link to={"/product-detail/" + id}><img src={img} alt="laptop" /></Link>
            </div>
            <div className={setGrid ? "cart-res-title" : "cart-title"}>{title}</div>
            <div className={setGrid ? "cart-res-content" : "cart-content"}>
                <h6>{name}</h6>
                <ul>
                    <li>{core}</li>
                    <li>{windows}</li>
                    <li>{display}</li>
                    <li>{card}</li>
                    <li>{memory}</li>
                </ul>

                <Link to={"/product-detail/" + id}><h6>{'US$' + price}<span>&gt;</span></h6></Link>
            </div>

        </Grid>
    )
}
export default ProductsList;