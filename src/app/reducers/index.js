import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    blank: () => [] // Remove the line if atleast one reducer is available
    // rest of your reducers
  })

export default rootReducer
