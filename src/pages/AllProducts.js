import React from 'react';
import { Grid, Container, IconButton } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import BannerAllProducts from '../components/BannerAllProducts';
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import {useMediaQuery} from '@material-ui/core';
import {connect} from 'react-redux';


const AllProducts = ({products})=>{
    const [sort, setSort] = React.useState(false);
    const handleSortGrid = ()=>{
        setSort(false);
    }
    const handleSortRow = ()=>{
        setSort(true)
    }
    React.useEffect(()=>{
        const handle = () =>{
            if(res.matches){
                setSort(false)
            }
        }
        const res = window.matchMedia('(max-width: 769px)');
        res.addEventListener('change', handle);
        return ()=>{
            res.removeEventListener('change', handle)
        }
    },[])
    const matches = useMediaQuery('(min-width:769px)');
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
                        xs={12} sm={9 } md={9} lg={9}>
                           {!!matches && <Grid item xs={12} className="sort-button" >
                                 <IconButton onClick={handleSortGrid}><MenuIcon/></IconButton>
                                 <IconButton onClick={handleSortRow}><ListIcon/></IconButton>
                            </Grid>}
                             {products.map((x , y)=>
                                <ProductsList setGrid={sort} key={ y } {...x} />
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