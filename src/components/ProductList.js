import React from 'react';
import request from '../utils/request';
import { Box } from 'grommet';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
    state = {
        filter: { include: 'main_image', name: '' },
        data: [],
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps, preveState) {
        if (prevProps.search !== this.props.search) {
            this.fetchData();
        }
    }

    fetchData = async () => {

        const params = {
            include: 'main_image',
        }
        if (this.props.search !== '') {
            params.filter = `like(name,${this.props.search})`;
        }
        const res = await request.get('/products', {
            params: params
        });
        const data = res.data.data.map(item => {
            const image = res.data.included.main_images.find(r => {
                return r.id === item.relationships.main_image.data.id;
            })
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                image: image.link.href,
                price: item.meta.display_price.with_tax.formatted
            }
        })

        this.setState({
            data: data
        })
    }

    render() {
        const { data } = this.state;
        return (
            <Box
                pad="small"
                fill
                direction="column">
                <Box
                    pad="small"
                    background="light-3">
                    123
                </Box>
                <Box
                    pad="small"
                    direction="row"
                    fill
                    wrap
                    overflow="auto">
                    {
                        data.map((item) => (
                            <ProductItem
                                key={ item.id }
                                {...item}
                            />
                        ))
                    }
                </Box>
            </Box>
        );
    }
}

export default ProductList;