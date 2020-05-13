import React, { Component } from 'react'
import '../styles/modal.scss'

export default class Modal extends Component {
  state = {
    showModal: false
  }

  render() {
    return (
      <div className="modal">
        <div className="content">
          <span onClick={() => document.getElementsByClassName("modal")[0].style.display = "none"} className="close">&times;</span>
          {this.props.children}
          <div className="interactions">
          </div>
        </div>
      </div>
    )
  }
}
