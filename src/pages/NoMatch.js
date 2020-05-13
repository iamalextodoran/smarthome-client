import React, { Component } from 'react'
import Icon from '../components/Icon'

export default class NoMatch extends Component {
  render() {
    return (
      <div style={{ height: "80vh" }} className="layout-column layout-align-center-center">
        <h1>Page not found brotha!</h1>
        <h1 style={{ color: "var(--primary-color)", marginTop: "-20px" }}><strong>404</strong></h1>
        <div className="layout-row">
          <Icon icon="fas fa-sad-tear" size="100" color="var(--primary-color)" />
          <Icon icon="fas fa-sad-cry" size="100" color="var(--primary-color)" />
        </div>
      </div>
    )
  }
}