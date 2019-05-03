import React from 'react';
import { Box, Image, Heading, Text, Stack, Button } from 'grommet';
import { Shop } from 'grommet-icons';

import { connect } from 'react-redux';
class ProductItem extends React.Component {
    handleAddToCart = () => {
        const { addItem, id, name } = this.props;
        addItem({
            'id': id, 'name': name
        });
    }
    render() {

        const { name, description, image, price } = this.props;
        return (
            <Box
                basis="medium"
                pad="small"
                direction="column">
                <Box height="small">
                    <Stack fill anchor="top-right">
                        <Box fill>
                            <Image fit="cover" src={image} />
                        </Box>
                        <Box
                            background="brand"
                            pad="xsmall"
                        >
                            <Text>{price}</Text>
                        </Box>
                    </Stack>

                </Box>
                <Box>
                    <Heading textAlign="center" margin={{ vertical: "xsmall" }} level="4">{name}</Heading>
                    <Text textAlign="center">{description}</Text>
                    <Button primary pad="small" icon={<Shop />} margin="small" label="Add to cart" onClick={this.handleAddToCart} />
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    };
}
const mapDispatchToProps = dispatch => {
    return {
        addItem: dispatch.cart.addItem
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);