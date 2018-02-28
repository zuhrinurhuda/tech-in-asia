import React, { Component } from 'react'
import { Button, Segment, Input } from 'semantic-ui-react'

import firebase from '../firebase'

class Home extends Component {
  constructor (props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleInput ({ target }) {
    this.setState({
      [target.name]: target.value
    })
  }

  logout () {
    firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/login')
      })
      .catch(error => alert(error))
  }

  render () {
    return (
      <Segment.Group>
        <Button onClick={this.logout}>Logout</Button>
        <Segment>
          <Input fluid
            icon={{ name: 'add', link: true }}
            placeholder='Add new task'
            name='task'
            onChange={this.handleInput}
          />
        </Segment>
      </Segment.Group>
    )
  }
}

export default Home