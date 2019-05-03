import React from 'react';
import { Grommet, Box } from 'grommet';

import './App.css';

import AppBar from './components/AppBar';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';


class App extends React.Component {
    state = {
        search: ''
    }

    handleFormSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    render() {
        const { search } = this.state;
        return (
            <Grommet plain full>
                <Box direction="column" fill>
                    <AppBar />

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
                </Box>
            </Grommet>
        )
    }
}


export default App;
