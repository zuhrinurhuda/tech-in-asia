import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import firebase from './firebase'
import { change_login_status } from './redux/actions'
import { Login, Home, NotFound } from './components'

const mapStateToProps = state => {
  return {
    isLogin: state.userReducers.isLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLoginStatus: loginStatus => dispatch(change_login_status(loginStatus))
  }
}

class App extends Component {
  checkLoginStatus () {
    console.log('WillMount --> isLogin:', this.props.isLogin)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.changeLoginStatus({ isLogin: true })
      } else {
        console.log('belum login')
      }
    })
  }

  componentWillMount () {
    this.checkLoginStatus()
  }

  render() {
    console.log('Render --> isLogin:', this.props.isLogin)
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
      {...rest}
      render={props =>
        this.props.isLogin ? (
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
      <Router>
        <Container>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
