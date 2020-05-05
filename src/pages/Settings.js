import React, { Component } from 'react'
import '../styles/card.scss'
import Toggle from '../components/Toggle'
import Input from '../components/Input'

export default class Settings extends Component {
  state = {
    darkModeOn: localStorage.getItem('darkMode') === null ? true: false,
  }

  darkModeToggle = () => {
    let darkMode = localStorage.getItem('darkMode');
    const enableDarkMode = () => {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
      this.setState({darkModeOn: true});
    }
    const disableDarkMode = () => {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', null);
      this.setState({darkModeOn: false});
    }
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }

  render() {
    return (
      <div className="layout-column layout-align-center-center" style={{ width: "100%", borderSize: "border-box" }}>
        <div className="card" style={{ minWidth: "275px", minHeight: "275px" }}>
          <div className="content">
            <h2>Appereance settings</h2>

            <div className="layout-row layout-align-space-between-center">
              <div style={{ minWidth: "100px" }}>
                <p>Dark mode</p>
              </div>
              <div>
                <Toggle onChange={this.darkModeToggle} value={this.state.darkModeOn} />
              </div>
            </div>

            <div className="layout-row layout-align-space-between-center">
              <div style={{ minWidth: "100px" }}>
                <p>Primary color</p>
              </div>
              <div>
                <div style={{ width: "50px", height: "30px", background: "coral", marginRight: "25px" }}></div>
              </div>
            </div>

            <div className="layout-row layout-align-space-between-center">
              <div style={{ minWidth: "100px" }}>
                <p>Accent color</p>
              </div>
              <div>
                <div style={{ width: "50px", height: "30px", background: "deeppink", marginRight: "25px" }}></div>
              </div>
            </div>
          </div>


        </div>

        <div className="card" style={{ minWidth: "275px", minHeight: "275px" }}>
          <div className="content">
            <h2>User settings</h2>

            <div className="layout-row layout-align-space-between-center">
              <div style={{ minWidth: "100px" }}>
                <p>Picture</p>
              </div>
              <div>
                <img src="https://source.unsplash.com/ToqoQSH-WYQ/500x500" style={{ width: "100px", height: "100px", borderRadius: "50px", background: "deeppink", margin: "10px" }} />
              </div>
              <div>
              </div>
            </div>
            <div className="layout-row layout-align-space-between-center">
              <div style={{ minWidth: "100px" }}>
                <p>First name</p>
              </div>
              <Input />
            </div>
            <div className="layout-row layout-align-space-between-center">
              <div style={{ minWidth: "100px" }}>
                <p>Last name</p>
              </div>
              <Input />
            </div>
            <div className="layout-row layout-align-space-between-center">
              <div style={{ minWidth: "100px" }}>
                <p>City name</p>
              </div>
              <Input />
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}
