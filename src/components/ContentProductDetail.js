import React from 'react';
import { Button } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { connect } from 'react-redux';
import * as action from '../redux/actions/index';
import Alert from '@material-ui/lab/Alert';

const ContentProductDetail = (props) => {
    const [message, setMessage] = React.useState(false);
    const matches = useMediaQuery('(min-width:769px)');
    const { name, slogan, price, core, windows, display, card, memory, keyboard } = props;
    const onAddToCart = () => {
        props.onAddToCart(props);
        setMessage(true)
        setTimeout(function () {
            setMessage(false)
        }, 3000)
    }
    return (
        <div className={!!matches ? "product-detail-content" : "product-detail-content-res"}>
            <h3>{name}</h3>
            <h6>{slogan}</h6>
            <span>{price}$</span>
            <h4>Specifications</h4>
            <ul>
                <li>{core}</li>
                <li>{windows}</li>
                <li>{display}</li>
                <li>{card}</li>
                <li>{memory}</li>
                <li>{keyboard}</li>
            </ul>
            <Button color="secondary" onClick={onAddToCart}>Add to cart</Button>
            {!!message && <Alert severity="success">Add to cart success</Alert>}
        </div>
    )
}

const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(action.addToCart(product, 1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentProductDetail);
