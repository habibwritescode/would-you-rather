import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export default applyMiddleware(...middlewares)