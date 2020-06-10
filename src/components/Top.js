import React, { Component } from "react";
import Header from "./Header";
import User from "./User";
import Menu from "./Menu";

import { connect } from "react-redux";
import { fetchUsers, fetchUser, createUser } from "../actions/usersActions";
import { fetchRooms } from "../actions/roomsActions";
import { fetchDevices } from "../actions/devicesActions";

class Top extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="layout-row layout-align-space-between-center">
          <User
            name="Alex"
            picture="https://source.unsplash.com/ToqoQSH-WYQ/500x500"
          />
          <Menu />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
  rooms: state.rooms,
  devices: state.devices,
});

export default connect(mapStateToProps, {
  fetchUsers,
  fetchRooms,
  fetchDevices,
  fetchUser,
  createUser,
})(Top);
