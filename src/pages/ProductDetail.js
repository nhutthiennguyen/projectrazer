import React from 'react';
import {Grid} from '@material-ui/core';
import SildeProductDetail from '../components/SlideProductDetail';
import ContentPruductDetail from '../components/ContentProductDetail';
import ProductDetailTechSpec from '../components/ProductDetailTechSpec';
import {connect} from 'react-redux';

const ProductDetail = ({match, products})=>{
    const id = match.params.id;
    const product = products.filter(x => x.id == id)[0];
    
    return(
        <div className="product-detail">
            <Grid container>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <SildeProductDetail {...product}/>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <ContentPruductDetail {...product} />
                </Grid>
                <Grid className="product-detail-techspec" item xs={12}>
                    <ProductDetailTechSpec {...product}/>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        products: state.products
    }
}
export default connect(mapStateToProps,null)(ProductDetail);