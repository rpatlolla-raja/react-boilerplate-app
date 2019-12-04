import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import rootReducer from 'app/reducers'

export const history = createBrowserHistory()

export default function configureStore() {
  const middleware = []
  const initialState = {}

  middleware.push(routerMiddleware(history))

  const epicMiddleware = createEpicMiddleware()
  middleware.push(epicMiddleware)

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const enhancers = [applyMiddleware(...middleware)]

  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(...enhancers)
  )
}
