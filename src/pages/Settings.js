import React, { Component } from 'react'
import Toggle from '../components/Toggle'
import Input from '../components/Input'
import Top from '../components/Top';
import Footer from '../components/Footer';
import { GithubPicker } from 'react-color';
import '../styles/card.scss'
import '../styles/user.scss'
import { connect } from "react-redux";
import { fetchUser, editUser } from "../actions/usersActions";

class Settings extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.props.fetchUser(1)
    }
  }

  state = {
    darkModeOn: localStorage.getItem('darkMode') !== null ? true : false,
    showPrimary: false,
    showAccent: false,
    primaryColor: localStorage.getItem('primaryColor') || 'coral',
    accentColor: localStorage.getItem('accentColor') || 'deeppink',
    city: this.props.users.user && this.props.users.user.city,
    email: this.props.users.user && this.props.users.user.email,
    name:  this.props.users.user && this.props.users.user.name,
  }

  displayPrimaryColor = () => {
    this.setState({ showPrimary: !this.state.showPrimary });
    this.setState({ showAccent: false });
  }

  displayAccentColor = () => {
    this.setState({ showAccent: !this.state.showAccent });
    this.setState({ showPrimary: false });
  }

  handlePrimaryColor = (color) => {
    this.setState({ primaryColor: color.hex });
    this.setState({ showPrimary: false });
    localStorage.setItem('primaryColor', color.hex);
    localStorage.setItem('primaryColorHover', `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.8)`);
    document.documentElement.style.setProperty("--primary-color", color.hex);
    document.documentElement.style.setProperty("--primary-color-hover", `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.8)`);
  }

  handleAccentColor = (color) => {
    this.setState({ accentColor: color.hex });
    this.setState({ showAccent: false });
    localStorage.setItem('accentColor', color.hex);
    localStorage.setItem('accentColorHover', `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.8)`);
    document.documentElement.style.setProperty("--accent-color", color.hex);
    document.documentElement.style.setProperty("--accent-color-hover", `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.8)`);
  };

  onPrimaryColorHover = (color) => {
    this.setState({ primaryColor: color.hex });
  }

  onAccentColorHover = (color) => {
    this.setState({ accentColor: color.hex });
  }

  darkModeToggle = () => {
    let darkMode = localStorage.getItem('darkMode');
    const enableDarkMode = () => {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', true);
      this.setState({ darkModeOn: true });
    }
    const disableDarkMode = () => {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', null);
      this.setState({ darkModeOn: false });
    }
    
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'true') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }

  submitUserchanges = () => {
    const newData = {
      name: this.state.name, 
      email: this.state.email, 
      city: this.state.city
    }
    this.props.editUser(1, newData);
    this.props.fetchUser(1)
  }

  render() {
    return (
      <React.Fragment>
        <Top />
        <div className="layout-column layout-align-start-center">

          <div className="layout-column layout-align-center-center" style={{ width: "100%", borderSize: "border-box" }}>
            <div className="card" style={{ minWidth: "275px", minHeight: "275px" }}>
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
                  <div style={{ borderRadius: "5px", width: "60px", height: "30px", cursor: "pointer", background: this.state.primaryColor, marginRight: "25px" }} onClick={this.displayPrimaryColor}></div>
                  <div className="colorPicker" style={{ position: "absolute", display: this.state.showPrimary ? "block" : "none", zIndex: 10, right: 0 }}>
                    <GithubPicker triangle="hide" color={this.state.primaryColor} onChangeComplete={this.handlePrimaryColor} onSwatchHover={this.onPrimaryColorHover} />
                  </div>
                </div>
              </div>

              <div className="layout-row layout-align-space-between-center">
                <div style={{ minWidth: "100px" }}>
                  <p>Accent color</p>
                </div>
                <div>
                  <div style={{ borderRadius: "5px", width: "60px", height: "30px", cursor: "pointer", background: this.state.accentColor, marginRight: "25px" }} onClick={this.displayAccentColor}></div>
                  <div className="colorPicker" style={{ position: "absolute", display: this.state.showAccent ? "block" : "none", zIndex: 10, right: 0 }}>
                    <GithubPicker triangle="hide" color={this.state.accentColor} onChangeComplete={this.handleAccentColor} onSwatchHover={this.onAccentColorHover} />
                  </div>
                </div>
              </div>


            </div>

            <div className="card" style={{ minWidth: "275px", minHeight: "275px" }}>
              <h2>User settings</h2>

              <div className="layout-row layout-align-space-between-center">
                <div style={{ minWidth: "100px" }}>
                  <p>Picture</p>
                </div>
                <div className="profile" style={{ width: "106px", height: "106px" }} >
                  <img src={this.props.users.user && this.props.users.user.image } alt="nume" style={{ width: "100px", height: "100px" }} />
                </div>
                <div>
                </div>
              </div>
              <div className="layout-row layout-align-space-between-center">
                <div style={{ minWidth: "100px" }}>
                  <p>Name</p>
                </div>
                <Input value={ this.state.name } onChange={(e) => this.setState({ name: e.target.value })}/>
              </div>
              <div className="layout-row layout-align-space-between-center">
                <div style={{ minWidth: "100px" }}>
                  <p>Email</p>
                </div>
                <Input value={ this.state.email } onChange={(e) => this.setState({ email: e.target.value })}/>
              </div>
              <div className="layout-row layout-align-space-between-center">
                <div style={{ minWidth: "100px" }}>
                  <p>City name</p>
                </div>
                <Input value={ this.state.city } onChange={(e) => this.setState({ city: e.target.value })}/>
              </div>
              <div className="interactions">
                <button className="m_button medium primary" onClick={this.submitUserchanges} >Submit</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
  rooms: state.rooms,
  store: state.devices,
});

export default connect(mapStateToProps, { fetchUser, editUser })(Settings);