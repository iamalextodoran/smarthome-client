import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Icon from './Icon'

export default class Music extends Component {
  render() {
    return (
      <div className="mini-card">
        {/* <h4>Music</h4> */}
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <p>Machine Gun Kelly - Smoke and drive</p>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Icon icon="fas fa-step-forward" size="40"/>
            <Icon icon="fas fa-play" size="40"/>
            <Icon icon="fas fa-step-backward" size="40"/>
          </div>
        </div>
      </div>
    )
  }
}
