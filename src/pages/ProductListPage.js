import React from 'react';
import { Box } from 'grommet';
import ProductSearch from '../components/ProductSearch';
import ProductList from '../components/ProductList';

class ProductListPage extends React.Component {
    state = {
        search: ''
    }

    handleFormSearch = (e) => {
        this.setState({ search: e.target.value });
    }


    render() {
        const { search } = this.state;
        return (
            <Box
                direction="row"
                pad="medium"
                fill >
                <Box
                    width="medium" >
                    <ProductSearch search={search} handleFormSearch={this.handleFormSearch} />
                </Box>
                <Box
                    flex >
                    <ProductList search={search} />
                </Box>
            </Box>
        )
    }
}

export default ProductListPage;