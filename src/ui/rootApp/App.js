import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import configureStore, { history } from 'app/store/configureStore'
import routes from './routes'

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              name={route.name}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
