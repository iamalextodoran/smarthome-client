import React, { Component } from 'react'
import '../styles/toast.scss'
import ee from 'event-emitter'

const emitter = new ee();

export const notify = (message, color) => {
  emitter.emit('notify', message, color)
}

export default class Toast extends Component {
  constructor(props) {
    super(props);

    this.timeout = null;

    this.state = {
      message: "Default toast",
      color: "accent",
      visible: ""
    }

    emitter.on('notify', (message, color)=> {
      this.onShow(message, color)
    })
  }
  
  onShow = (message, color) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState({ visible: "" }, () => {
        this.timeout = setTimeout(() => {
          this.showToast(message, color);
        }, 300)
      })
    } else {
      this.setState({message, color})
      this.showToast(message, color);
    }
  }

  showToast = (message, color) => {
    this.setState({ visible: "show" }, () => {
      this.timeout = setTimeout(() => {
        this.setState({ visible: ""});
      }, 3000)
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="toast" className={"toast " + this.state.visible + " " + this.state.color}>
          <div id="frame" className="frame">{this.state.message}</div>
        </div>
      </React.Fragment>
    )
  }
}