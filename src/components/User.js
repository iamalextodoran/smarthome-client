import React, { Component } from 'react'
import '../styles/user.scss'

export default class User extends Component {
  render() {
    return (
      <div className="layout-row layout-align-center-center" style={{ marginLeft: 10 + 'px' }}>
        <div className="profile">
          <img src={this.props.picture} alt={this.props.name} />
        </div>
        <h1 style={{ marginLeft: 15 + 'px' }}><span style={{ fontWeight: 300 }}>Hey</span>, {this.props.name}</h1>
      </div>
    )
  }
}