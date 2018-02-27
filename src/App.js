import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import store from './redux/store'
import { Login, Home } from './components'


class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          Auth.isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )

    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route path='/login' component={Login} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    )
  }
}

export default App
