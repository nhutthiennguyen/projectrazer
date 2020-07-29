import React from 'react';
import { Grid, Container } from '@material-ui/core';
import BannerAllProducts from '../components/BannerAllProducts';
import Filter from '../components/Filter';
import cartproducts from '../utils/cartproducts';
import ProductsList from '../components/ProductsList';


const AllProducts = ()=>{
    
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
                             {cartproducts.map((x , y)=>
                                <ProductsList key={ y } {...x} />
                                    )}
                    </Grid>
            </Grid>
       </Container>
      
    </div>
    )
}

export default AllProducts;