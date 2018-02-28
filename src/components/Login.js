import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import firebase from '../firebase'
import { save_user_to_store, change_login_status } from '../redux/actions'

const mapDispatchToProps = dispatch => {
  return {
    saveUserData: userData => dispatch(save_user_to_store(userData)),
    changeLoginStatus: loginStatus => dispatch(change_login_status(loginStatus))
  }
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }

    this.login = this.login.bind(this)
  }

  login () {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(({ user }) => {
        const userData = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }

        this.props.saveUserData(userData)
        this.props.changeLoginStatus({ isLogin: true })
        this.setState({ redirectToReferrer: true })
      })
      .catch(error => alert(error.message))
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/'} }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from}/>
    } else {
      return <Button primary onClick={this.login}>Login</Button>
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)