import React from 'react';
import {Grid} from '@material-ui/core';
import SildeProductDetail from '../components/SlideProductDetail';
import ContentPruductDetail from '../components/ContentProductDetail';
import ProductDetailTechSpec from '../components/ProductDetailTechSpec';

const ProductDetail = ()=>{
    return(
        <div className="product-detail">
            <Grid container>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                    <SildeProductDetail/>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <ContentPruductDetail/>
                </Grid>
                <Grid className="product-detail-techspec" item xs={12}>
                    <ProductDetailTechSpec/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDetail;