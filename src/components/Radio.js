import React, { Component } from 'react'
import '../styles/radio.scss'

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.changeIt = this.changeIt.bind(this);
    this.state = {
      value: '',
    }
  }

  changeIt(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div className="wrapper">
        <input className="state" type="radio" name={this.props.name} id={this.props.name} value={this.props.name} onchange={this.toggleIt} />
        <label className="label">
          <div className="indicator"></div>
          <span className="text">{this.props.text}</span>
        </label>
      </div>
    )
  }
}