import { createStore } from 'redux'

import rootReducer from './reducers/index';
import middlewares from './middleware/middleware'

const store = createStore(rootReducer, middlewares)

export default store;