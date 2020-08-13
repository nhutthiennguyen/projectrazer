import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useMediaQuery } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import * as action from '../redux/actions/index';


const CartDetail = (props) => {
    const { product, quantity } = props;


    const onRemoveCartItem = () => {
        props.onRemoveCartItem(props)
    }
    const onIncreaseCartItem = () => {
        props.onIncreaseCartItem(props, quantity)
    }
    const onDecreaseCartItem = () => {
        props.onDecreaseCartItem(props, quantity)
    }
    const matches = useMediaQuery('(max-width:769px)');
    return (
        <div className={!!matches ? "cart-respon" : ' '}>
            <Grid item xs={12} sm={12} md={12} lg={12} className="cart-res">

                <div className="cart-res-img">
                    <Link to={"/product-detail/" + product.id}><img src={product.img} alt="laptop" /></Link>
                </div>
                <div className="quantity">
                    <h6>Quantity</h6>
                    <IconButton onClick={onDecreaseCartItem} className="icon-display">
                        <RemoveIcon style={{ color: green[500] }} />
                    </IconButton>
                    <span>{quantity}</span>
                    <IconButton onClick={onIncreaseCartItem}>
                        <AddIcon style={{ color: green[500] }} />
                    </IconButton>
                </div>
                <div className="cart-price">
                    <h6>Price</h6>
                    {product.price * quantity + '$'}
                </div>
                <div className="cart-remove">
                    <Button onClick={onRemoveCartItem} className="cart-remove" variant="outlined" style={{ color: green[500] }}>
                        Remove
                </Button>
                </div>
                <div className="cart-res-title">{product.title}</div>
                <div className="cart-res-content">
                    <h6>{product.name}</h6>
                    {!matches && <ul>
                        <li>{product.core}</li>
                        <li>{product.windows}</li>
                        <li>{product.display}</li>
                        <li>{product.card}</li>
                        <li>{product.memory}</li>
                    </ul>}
                </div>
            </Grid>

        </div>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveCartItem: (product) => {
            dispatch(action.removeCartItem(product))
        },
        onIncreaseCartItem: (product, quantity) => {
            dispatch(action.increaseCartItem(product, quantity))
        },
        onDecreaseCartItem: (product, quantity) => {
            dispatch(action.decreaseCartItem(product, quantity))
        }
    }
}
export default connect(null, mapDispatchToProps)(CartDetail);