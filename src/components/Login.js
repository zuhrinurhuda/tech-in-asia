import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import firebase from '../firebase'

class Login extends Component {
  constructor (props) {
    super(props)

    this.login = this.login.bind(this)
  }

  login () {
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        this.props.history.push('/')
      })
      .catch(error => alert(error.message))
  }

  render () {
    return (
      <Button primary onClick={this.login}>Login</Button>
    )
  }
}

export default Login