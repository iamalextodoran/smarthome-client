import React, { Component } from 'react'
import '../styles/input.scss'

export default class Input extends Component {
  render() {
    return (
      <div className="input-container">
        <input className="field" type={this.props.type} placeholder={this.props.placeholder} autoComplete={this.props.autoComplete}/> 
        <i className={this.props.icon}></i>
        <i className={"dot " + this.props.dot}></i>
      </div>
    )
  }
}
