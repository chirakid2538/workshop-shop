import React from 'react';
import { Box } from 'grommet';
import { connect } from 'react-redux';
class CartItemList extends React.Component {

    render() {
        const { cartItems } = this.props;
        return (
            <Box>
                {
                    cartItems.map((item, index) => (
                        <Box key={index}>
                            {item.name} X {item.amount}
                        </Box>
                    ))
                }
            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}
export default connect(mapStateToProps)(CartItemList);