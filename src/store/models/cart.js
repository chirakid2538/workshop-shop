import request from '../../utils/request';

export const cart = {
    state: {
        cartItems: [],
        totalPrice: 0
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        addItem(state, payload) {

            const hasItem = state.cartItems.find(item => item.productId === payload.id);
            if (hasItem) {
                const cartItems = state.cartItems.map(item => {
                    if (item.productId === payload.id) {
                        return {
                            ...item,
                            amount: item.amount + 1
                        }
                    }
                    return item;
                });
                return {
                    ...state,
                    cartItems
                }

            }

            return {
                ...state,
                cartItems: [
                    {
                        productId: payload.id,
                        name: payload.name,
                        amount: 1
                    }
                    , ...state.cartItems]
            }
        },
        deleteItem(state, payload) {
            return state + payload
        },
        setCartItems(state, payload) {
            return {
                ...state,
                cartItems: payload
            }
        },
        setTotalPrice(state, payload) {
            return {
                ...state,
                totalPrice: payload
            }
        }
    },
    effects: (dispatch) => ({

        // handle state changes with impure functions.
        // use async/await for async actions
        // async incrementAsync(payload, rootState) {
        //     await new Promise(resolve => setTimeout(resolve, 1000))
        //     dispatch.count.increment(payload)
        // }

        async getCartItemsAsync() {
            const res = await request.get('/carts/dddasdweerwerwer/items/');

            const cartItems = res.data.data.map(function (item) {
                return {
                    productId: item.id,
                    name: item.name,
                    amount: item.quantity,
                    images: item.quantity,
                    totalPrice: item.unit_price.amount,
                    totalPriceUnit: item.unit_price.currency
                }
            })
            dispatch.cart.setCartItems(cartItems);
            dispatch.cart.setTotalPrice(res.data.meta.display_price.with_tax.amount);
        },
        async addCartItemsAsync(productId) {
            await request.post('/carts/dddasdweerwerwer/items/',
                {
                    data: {
                        "type": "cart_item",
                        "id": productId,
                        "quantity": 1
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            this.getCartItemsAsync();
        },
        async checkout(form) {
            var data = {
                "data": {
                    "customer": {
                        "email" : form.email,
                        "name"  : form.name,
                    },
                    "billing_address": {
                        "first_name"    : form.first_name,
                        "last_name"     : form.last_name,
                        "company_name"  : form.company_name,
                        "line_1"        : form.line_1,
                        "line_2"        : form.line_2,
                        "city"          : form.city,
                        "postcode"      : form.postcode,
                        "county"        : form.county,
                        "country"       : form.country,
                    },
                    "shipping_address": {
                        "phone_number"  : form.phone_number,
                        "first_name"    : form.first_name,
                        "last_name"     : form.last_name,
                        "company_name"  : form.company_name,
                        "line_1"        : form.line_1,
                        "line_2"        : form.line_2,
                        "city"          : form.city,
                        "postcode"      : form.postcode,
                        "county"        : form.county,
                        "country"       : form.country,
                        "instructions"  : form.instructions,
                    }
                }
            }

            const res = await request.post('/carts/dddasdweerwerwer/checkout/',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            console.log(res);
        }
    })
}