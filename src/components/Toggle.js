import React, { Component } from 'react'
import '../styles/toggle.scss'

export default class Toggle extends Component {
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
        <label className="toggle-row">
          <div className="toggle">
            <input className="state" type="checkbox" name={this.props.name} value={this.props.name} onChange={this.changeIt}/>
            <div className="indicator"></div>
          </div>
          <div className="text">{this.props.text}</div>
        </label>
      </div>
    )
  }
}