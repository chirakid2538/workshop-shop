import request from '../../utils/request';

export const cart = {
    state: {
        productItems: [],
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setProductItems(state, payload) {
            return {
                ...state,
                productItems: [...payload]
            }
        }
    },
    effects: (dispatch) => ({

        async fetchProductItemsAsync(filter = {}) {


            const params = {
                include: 'main_image',
            }
            if (filter.search !== '') {
                params.filter = `like(name,${filter.search})`;
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
        }
    })
}