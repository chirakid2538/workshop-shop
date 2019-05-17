import React from 'react';
import { Box, Button } from 'grommet';
import { Shop } from 'grommet-icons';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
class CartItemList extends React.Component {

    componentDidMount(){
        this.props.getCartItemsAsync();
    }
    render() {
        const { cartItems, history } = this.props;
        return (
            <Box>
                {
                    cartItems.map((item) => (
                        <Box pad="small" key={item.productId}>
                            {item.name} X {item.amount}
                        </Box>
                    ))
                }
                <Button primary pad="small" icon={<Shop />} margin="small" onClick={() => history.push('/checkout/')} label="Checkout!" />

            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartItemsAsync: dispatch.cart.getCartItemsAsync
    };
}
export default connect(mapStateToProps , mapDispatchToProps)(withRouter(CartItemList));