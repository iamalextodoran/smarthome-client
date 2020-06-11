import React, { Component } from "react";
import PropTypes from 'prop-types'
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
            name={this.props.users.user && this.props.users.user.name }
            picture={this.props.users.user && this.props.users.user.image }
          />
          <Menu />
        </div>
      </React.Fragment>
    );
  }
}

Top.propTypes = {
  users: PropTypes.object
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
  rooms: state.rooms,
  store: state.devices,
});

export default connect(mapStateToProps, {
  fetchUsers,
  fetchRooms,
  fetchDevices,
  fetchUser,
  createUser,
})(Top);
