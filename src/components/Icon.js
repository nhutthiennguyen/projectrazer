import React from 'react';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from 'react-redux';

const Icon = ({ product }) => {

    let item = [0];
    for (let i = 0; i < product.length; i++) {
        item.push(product[i].quantity);
    }
    const itemProduct = item.reduce((x, y) => x + y);

    return (
        <div className="icon">
            <IconButton component={Link} to="/cart">
                <PersonOutlineOutlinedIcon />
            </IconButton>

            <IconButton component={Link} to="/cart" aria-label="cart">
                <Badge badgeContent={itemProduct} color="secondary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </IconButton>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
export default connect(mapStateToProps, null)(Icon);