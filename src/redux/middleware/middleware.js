import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'

const middlewares = [thunk, logger]

export default applyMiddleware(...middlewares)