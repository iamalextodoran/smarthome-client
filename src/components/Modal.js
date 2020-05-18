import React, { Component } from 'react'
import '../styles/modal.scss'

export default class Modal extends Component {
  render() {
    return (
      <div className="modal" style={{ display: this.props.isShowing ? 'block' : 'none' }}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
