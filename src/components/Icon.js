import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    return (
      <i onClick={this.props.onClick} className={this.props.icon} style={{ fontSize: this.props.size + 'px', color: this.props.color, padding: "5px", transition: "all .5s" }}></i>
    )
  }
}