import React, { Component } from 'react'
import Icon from './Icon'

export default class Footer extends Component {
  render() {
    return (
      <div className="layout-row layout-align-center-center" style={{ marginTop: 25 + 'px' }}>
        <p><span><Icon icon="far fa-copyright" /></span>TODD TOP SOLUTIONS</p>
      </div>
    )
  }
}