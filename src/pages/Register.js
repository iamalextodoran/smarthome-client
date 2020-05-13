import React, { Component } from 'react'
import '../styles/card.scss'
import Input from '../components/Input'
import Button from '../components/Button'
export default class Register extends Component {
  render() {
    return (
      <div className="layout-column layout-align-center-center">
        <div className="card" style={{ width: "21em", paddingBottom: "50px" }}>
          <h1>Enter your data</h1>
          <div className="layout-column layout-align-start-center">
            <Input type="text" dot="hidden" placeholder="Name" />
            <Input type="text" dot="hidden" placeholder="Last name" />
            <Input type="text" dot="hidden" placeholder="Email" />
            <Input type="password" dot="hidden" placeholder="Password" />
            <Input type="password" dot="hidden" placeholder="Enter password again" />
            <Button raised="true" text="Press to register" type="primary" icon="fas fa-fingerprint" />
          </div>
        </div>
      </div>
    )
  }
}
