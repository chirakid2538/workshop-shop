import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'
import createRematchPersist from '@rematch/persist'
import * as models from './models'

const persistPlugin = createRematchPersist({
    whitelist: ['user'],
    throttle: 5000, /* เก็บลง local storage ทุกๆ */
    version: 1,
})


const selectPluginInstance = selectPlugin();


const store = init({
    models,
    plugins: [persistPlugin , selectPluginInstance]
})

export default store