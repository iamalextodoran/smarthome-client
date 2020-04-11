import React, { Component } from 'react'
import Button from './Button';
import '../styles/default.scss'

export default class Menu extends Component {
  render() {
    return (
      <div className="layout-row layout-align-end-end" style={{marginRight: 10 + 'px'}}>
        <Button text="Home"/>
        <Button text="Rooms"/>
        <Button text="Devices"/>
      </div>
    )
  }
}