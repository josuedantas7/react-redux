import { createStore } from 'redux'

import rootReducer from './root-Reducer'

const store = createStore(rootReducer)

export default store;