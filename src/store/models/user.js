export const user = {
    state: {
        token: null
    }, // initial state
    reducers: {
        setToken(state, payload) {
            return {
                ...state,
                token: payload
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

        async login(payload, rootState) {
            const token = 'fskjafdfwh9euhrquipher21u34981278354y123t5hj1g2453425';
            if (payload.username === "demo" && payload.password === 'demo') {
                return dispatch.user.setToken(token);
            }
            return Promise.reject('Username Or Password invalid');
        },
        async logout(payload, rootState) {
            dispatch.user.setToken(null);
        }
    }),
    selectors: {
        isAuthenticated() {
            return (rootState, props) => rootState.user.token !== null
        }
    }
}