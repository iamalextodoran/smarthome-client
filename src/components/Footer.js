import React, { Component } from 'react'
import Icon from './Icon'

export default class Footer extends Component {
  render() {
    return (
      <div style={{marginTop: 25 + 'px'}}>
        <p><span><Icon icon="far fa-copyright"/></span>TODD SOLUTIONS SRL</p>
      </div>
    )
  }
}