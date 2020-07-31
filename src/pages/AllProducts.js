import React from 'react';
import { Grid, Container } from '@material-ui/core';
import BannerAllProducts from '../components/BannerAllProducts';
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import {connect} from 'react-redux';


const AllProducts = ({products})=>{
    
    return (
    <div className="page-all-products">
        <Grid className="banner-all-products" container item xs={12}>
            <BannerAllProducts title="laptops for gamer. by gamer&reg;"/>
        </Grid>
        <Container className="content-all-products">
            <Grid container>     
                    <Grid className="filter"
                        container 
                        item 
                        xs={12} sm={3} md={3} lg={3}> <Filter/>
                    </Grid>
                    <Grid className="product-list"
                        container
                        item 
                        spacing={0}
                        xs={12} sm={9} md={9} lg={9}>
                             {products.map((x , y)=>
                                <ProductsList  key={ y } {...x} />
                                    )}
                    </Grid>
            </Grid>
       </Container>
      
    </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        products: state.products
    }
}
export default connect(mapStateToProps,null)(AllProducts);