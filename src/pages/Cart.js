import React from 'react';
import CartDetail from '../components/CartDetail';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


const Cart = ({ product }) => {

    const handleTotal = (product) => {
        let total = 0;

        if (product.length > 0) {
            for (let i = 0; i < product.length; i++) {
                total += product[i].product.price * product[i].quantity
            }
        }

        return total;
    }
   

    return (
        <div className="cart-page">
            <Container>

                <div className="shopping-cart">
                    {product.map((x, y) => <CartDetail key={y} {...x} />)}
                    <Container>
                        {product < 1 && <Alert severity="warning">Cart is empty</Alert>}
                        {handleTotal(product) > 0 && <div className="total-amout">
                            <h3>TOTAL</h3> <span>{handleTotal(product) + '$'}</span>
                            <button>Checkout</button>
                        </div>}
                    </Container>
                </div>

            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
export default connect(mapStateToProps, null)(Cart);