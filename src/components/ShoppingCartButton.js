import React, { Component } from 'react'
import { DropButton, Box, Stack } from 'grommet';
import { FaShoppingBag } from 'react-icons/fa'
import CartItemList from './CartItemList';
import { connect } from 'react-redux';
class ShoppingCartButton extends Component {
  render() {
    return (
      <DropButton
        dropAlign={{
          top: 'bottom',
          right: 'right'
        }}
        dropContent={
          <CartItemList />
        }
      >
        <Stack
          anchor="top-right"
        >
          <Box pad='xsmall'>
            <FaShoppingBag size={32} />
          </Box>
          <Box
            background="accent-1"
            pad={{ horizontal: 'xsmall' }}
            round
          >
            {this.props.cartLength}
          </Box>
        </Stack>
      </DropButton>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartLength: state.cart.cartItems.length
  };
}
export default connect(mapStateToProps)(ShoppingCartButton);