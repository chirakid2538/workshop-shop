export const cart = {
    state: {
        cartItems: [
            // {
            //     productId: 1,
            //     amount: 2
            // }
        ]
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
        }
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        // async incrementAsync(payload, rootState) {
        //     await new Promise(resolve => setTimeout(resolve, 1000))
        //     dispatch.count.increment(payload)
        // }
    })
}