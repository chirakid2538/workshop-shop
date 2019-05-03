import React from 'react';
import { Box, FormField, TextInput } from 'grommet';
class ProductSearch extends React.Component {
    render() {
        return (
            <Box>
                <FormField label="Name" >
                    <TextInput name="search" onChange={this.props.handleFormSearch} value={this.props.search}/>
                </FormField>
            </Box>
        )
    }
}

export default ProductSearch;