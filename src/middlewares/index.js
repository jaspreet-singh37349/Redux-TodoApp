import checker from './checker'
import logger from './logger'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  checker,
  logger,
)