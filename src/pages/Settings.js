import React, { Component } from 'react'
import '../styles/card.scss'
import '../styles/user.scss'
import Toggle from '../components/Toggle'
import Input from '../components/Input'
import Top from '../components/Top';
import Footer from '../components/Footer';
import Left from '../components/Left';
import { GithubPicker } from 'react-color';

export default class Settings extends Component {
  state = {
    darkModeOn: localStorage.getItem('darkMode') === null ? true : false,
    primaryColor: 'coral',
    accentColor: 'deeppink',
  }

  handlePrimaryColor = (color) => {
    this.setState({ primaryColor: color.hex });
    document.getElementsByClassName("colorPicker")[0].style.display = "none"
  }

  handleAccentColor = (color) => {
    this.setState({ accentColor: color.hex });
    document.getElementsByClassName("colorPicker")[1].style.display = "none"
  };

  onPrimaryColorHover = (color, event) => {
    this.setState({ primaryColor: color.hex });
  }

  onAccentColorHover = (color, event) => {
    this.setState({ accentColor: color.hex });
  }


  darkModeToggle = () => {
    let darkMode = localStorage.getItem('darkMode');
    const enableDarkMode = () => {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
      this.setState({ darkModeOn: true });
    }
    const disableDarkMode = () => {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', null);
      this.setState({ darkModeOn: false });
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
      <React.Fragment>
        <Top />
        <div className="layout-column layout-align-start-center">

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
                    <div style={{ width: "60px", height: "30px", background: this.state.primaryColor || "coral", marginRight: "25px" }} onClick={() => (document.getElementsByClassName("colorPicker")[0].style.display = "block", document.getElementsByClassName("colorPicker")[1].style.display = "none") }></div>
                    <div className="colorPicker" style={{ position: "absolute", display: "none", zIndex: 10, right: 0 }}>
                      <GithubPicker triangle="hide" color={this.state.primaryColor} onChangeComplete={this.handlePrimaryColor} onSwatchHover={this.onPrimaryColorHover} />
                    </div>
                  </div>
                </div>

                <div className="layout-row layout-align-space-between-center">
                  <div style={{ minWidth: "100px" }}>
                    <p>Accent color</p>
                  </div>
                  <div>
                    <div style={{ width: "60px", height: "30px", background: this.state.accentColor, marginRight: "25px" }} onClick={() => (document.getElementsByClassName("colorPicker")[1].style.display = "block", document.getElementsByClassName("colorPicker")[0].style.display = "none") }></div>
                    <div className="colorPicker" style={{ position: "absolute", display: "none", zIndex: 10, right: 0 }}>
                      <GithubPicker triangle="hide" color={this.state.accentColor} onChangeComplete={this.handleAccentColor} onSwatchHover={this.onAccentColorHover} />
                    </div>
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
                  <div className="profile" style={{ width: "106px", height: "106px" }} >
                    <img src="https://source.unsplash.com/ToqoQSH-WYQ/500x500" style={{ width: "100px", height: "100px" }} />
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
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
