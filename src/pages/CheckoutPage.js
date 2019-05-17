import React from 'react';
import { Box } from 'grommet';
import { connect } from 'react-redux';
import CheckoutForm from '../components/CheckoutForm';

class CheckoutPage extends React.Component {
    componentDidMount() {
        this.props.getCartItemsAsync();
    }
    onSubmit = (form) => {
        if ( window.confirm("ก็แล้วแต่ ๆ") ) {
            this.props.checkout(form);
        }
    }
    render() {
        const { cartItems, totalPrice } = this.props;
        return (
            <Box
                direction="row"
                pad="small">
                <Box width="medium">
                    {
                        cartItems.map((item) => (
                            <Box pad="small" key={item.productId}>
                                {item.name} X {item.amount}
                            </Box>
                        ))
                    }
                    <Box pad="small" style={{ borderBottom: "1px solid", borderTop: "1px solid" }}>{totalPrice}</Box>
                </Box>
                <Box style={{ width: '100%' }}>
                    <CheckoutForm onSubmit={this.onSubmit} />
                </Box>
            </Box>
        )
    }
}


const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        checkout: dispatch.cart.checkout,
        getCartItemsAsync : dispatch.cart.getCartItemsAsync
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);