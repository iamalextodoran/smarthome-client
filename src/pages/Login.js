import React, { Component } from 'react'
import '../styles/card.scss'
import Input from '../components/Input'
import Button from '../components/Button'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="layout-column layout-align-center-center" style={{ height: "70vh" }}>
        <div className="card" style={{ width: "21em" }}>
          <h1>Enter your credentials</h1>
          <div className="content layout-column layout-align-start-center">
            <Input type="text" dot="success" placeholder="Username" />
            <Input type="password" dot="danger" placeholder="Password" />
            <Button raised="true" text="Log in brotha" type="accent" icon="fas fa-fingerprint" />
          </div>
          <p style={{ paddingLeft: "175px", marginTop: "-2px" }}>New? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    )
  }
}
