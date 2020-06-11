import React, { Component } from 'react'
import '../styles/card.scss'
import Icon from './Icon'
import Radio from './Radio'
import Toast, { notify } from './Toast';
import { editUser} from '../actions/usersActions'
import { connect } from "react-redux";
import { fetchUsers, fetchUser, createUser } from "../actions/usersActions";
class Temperature extends Component {
  state = {
    setTemperature: 22,
    actualTemperature: 24,
    selectedMode: this.props.users && this.props.users.user.selectedMode,
    setTemperatureEco: 16,
    setTemperatureDay: 19,
    setTemperatureNight: 22,
  }

  componentWillMount() {
    fetch(`/users/1`)
      .then(response => response.json())
      .then(data => this.setState({ selectedMode: data.temperatureMode, setTemperature: data.temperature }))
  }

  handleClick = () => {
    console.log(this.props.value)
  }

  changeTemperatureMode = (e) => {
    let value = e.target.innerHTML === '' || e.target.innerHTML.length >= 6 ? this.state.selectedMode : e.target.innerHTML;
    let setThis = '';

    this.setState({ selectedMode: value });

    if (value === 'Eco') {
      setThis = this.state.setTemperatureEco;
    } else if (value === 'Day') {
      setThis = this.state.setTemperatureDay;
    } else if (value === 'Night') {
      setThis = this.state.setTemperatureNight;
    }
    this.setState({ setTemperature: setThis });
    notify("Done", "primary")
    this.updateTemperatureMode(value)
  }

  updateTemperatureMode = (value) => {
    const data = { temperatureMode: value };
    this.props.editUser(1, data)
  }

  setThermometerColor = () => {
    if (this.state.selectedMode === 'Day') {
      return "deepskyblue"
    } else if (this.state.selectedMode === 'Night') {
      return "crimson"
    } else return "grey"
  }

  render() {
    return (
      <div className="card">
        <div className="layout-row layout-align-center-center">
          <Icon icon={this.state.selectedMode === 'Eco' ? 'fas fa-thermometer-empty' : 'fas fa-thermometer-half'} size="40" color={this.setThermometerColor()} />
          <div className="layout-column layout-align-end-end">
            <h2><strong>{this.state.actualTemperature}  °C</strong></h2>
            <p style={{ marginTop: "-25px" }}>set {this.state.setTemperature} °C</p>
          </div>
        </div>
        <div className="layout-row layout-align-space-between-center" style={{ marginTop: "-20px" }}>
          <Radio checked={this.state.selectedMode === 'Day'} value="Day" onClick={this.changeTemperatureMode} />
          <Radio checked={this.state.selectedMode === 'Eco'} value="Eco" onClick={this.changeTemperatureMode} />
          <Radio checked={this.state.selectedMode === 'Night'} value="Night" onClick={this.changeTemperatureMode} />
          <Toast />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.users
})

export default connect(mapStateToProps, { fetchUsers, fetchUser, createUser, editUser })(Temperature);