import React, { Component } from 'react'
import Left from './Left';
import Top from './Top';
import Footer from './Footer';
import Slider from './Slider';
import Toggle from './Toggle';
import Toast, { notify } from './Toast';
import Icon from './Icon';
import Input from './Input';
import Modal from './Modal';
import { connect } from 'react-redux'
import { fetchRooms, createRoom, deleteRoom } from "../actions/roomsActions";

class Room extends Component {
  state = {
    showModal: false
  }

  componentDidMount() {
    this.setState({ RoomId: parseInt(this.props.match.params.roomId) })
  }

  deleteRoom = (room) => {
    this.props.deleteRoom(room)
    // notify("Done", "primary")
    // window.location.replace("/");
  }

  editRoom = () => {
  }

  handleBlinds = () => {
  }

  handleWindows = () => {
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  newDevice = () => {
    const data = {
      name: this.state.name,
      type: this.state.type,
      description: this.state.description,
      value: this.state.value,
      warm: this.state.warm,
      RoomId: this.state.RoomId
    }

    fetch('devices', {
      method: 'POST',
      mode: "cors",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
    this.setState({ name: '', type: '', description: '', value: '', warm: '', showModal: false })
  }

  render() {
    const idToMatch = parseInt(this.props.match.params.roomId);
    const room = this.props.rooms.rooms.filter(room => room.id === idToMatch)[0];
    const lights = room.Devices.filter(device => device.type === "Light");
    const blinds = room.Devices.filter(device => device.type === "Blind");
    const windows = room.Devices.filter(device => device.type === "Window");

    return (
      <React.Fragment>
        <Top />
        <div className="layout-row layout-xs-column">
          <Left />
          <div className="layout-row layout-align-end-start flex-wrap flex-70">
            {<div className="card" key={room.id}>
              <div className="layout-row layout-align-space-between-center">
                <div className="layout-row">
                  <h1>{room.name}</h1>
                  <h3 style={{ marginLeft: "10px" }}>{room.temperature} °C</h3>
                </div>
                <div>
                  <Icon icon="fas fa-edit" onClick={this.editRoom(room.id)} />
                  <Icon icon="fas fa-trash" onClick={this.deleteRoom(room.id)} />
                </div>
              </div>
              <p>{room.description}</p>
              <img src={room.image} alt={room.name} style={{ minWidth: "200px", width: "100%", maxWidth: "500px", borderRadius: "20px" }} />
              <div>

                {lights.length > 0 ? lights.map(light => (
                  <div key={light.id}>
                    <p>{light.name} </p>
                    <Slider description="brightness" value={light.value} />
                    <Slider description="warmness" value={light.warm} />
                  </div>
                )) : <p>No lights found</p>}

                {blinds.length > 0 ? blinds.map(blind => (
                  <div key={blind.id} className="layout-row layout-align-space-between-center">
                    <p>{blind.name} {blind.value === 0 ? "closed" : "open"}</p>
                    <Toggle onChange={this.handleBlinds} checked={blind.value === 0 ? false : true} />
                  </div>
                )) : <p>No blinds found</p>}

                {windows.length > 0 ? windows.map(window => (
                  <div key={window.id} className="layout-row layout-align-space-between-center">
                    <p>{window.name} {window.value === 0 ? "closed" : "open"}</p>
                    <Toggle onChange={this.handleWindows} checked={window.value === 0 ? false : true} />
                  </div>
                )) : <p>No windows found</p>}
              </div>
              <div className="interactions">
                <button className="m_button primary" onClick={() => this.setState({ showModal: !this.state.showModal })}><Icon icon="fas fa-plus" /> Add new device</button>
              </div>
            </div>}
            <Modal isShowing={this.state.showModal}>
              <span className="close" onClick={() => this.setState({ showModal: !this.state.showModal })}>&times;</span>
              <h1>Add new device</h1>
              <Input placeholder="Name" value={this.state.name} name="name" width="75%" onChange={this.handleInputChange} />
              <Input placeholder="Description" value={this.state.description} name="description" width="75%" onChange={this.handleInputChange} />
              <Input placeholder="Type" value={this.state.type} name="type" width="75%" onChange={this.handleInputChange} />
              <Input placeholder="Value" value={this.state.value} name="value" width="75%" onChange={this.handleInputChange} />
              <Input placeholder="Warm" value={this.state.warm} name="warm" width="75%" onChange={this.handleInputChange} />
              <div className="interactions">
                <button className="m_button primary" onClick={this.newDevice}><Icon icon="fas fa-plus" />Add room</button>
              </div>
            </Modal>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
})

export default connect(mapStateToProps, { fetchRooms, createRoom, deleteRoom })(Room);