import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'

const middlewares = []

if(process.env.NODE_ENV === 'development'){
    middlewares.push(thunk, logger)
}

export default applyMiddleware(...middlewares)