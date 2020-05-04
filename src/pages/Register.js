import React, { Component } from 'react'
import '../styles/card.scss'
import Input from '../components/Input'
import Button from '../components/Button'
export default class Register extends Component {
  render() {
    return (
      <div className="layout-column layout-align-center-center">
        <h1>Register page</h1>
        <div className="card" style={{ width: "21em", paddingBottom: "50px" }}>
          <p style={{ paddingLeft: "40px", marginBottom: "-10px", paddingTop: "30px" }}>Enter your data</p>
          <div className="content layout-column layout-align-start-center">
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
