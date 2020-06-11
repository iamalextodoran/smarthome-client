import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Instead of BrowserRouter I have to use HashRouter for Github pages
import NoMatch from "./pages/NoMatch";
import Settings from "./pages/Settings";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { connect } from "react-redux";
import { fetchUsers, fetchUser } from "./actions/usersActions";
import { fetchRoomsforUser, createRoom } from "./actions/roomsActions";
import { fetchDevices } from "./actions/devicesActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUsers();
    this.props.fetchRoomsforUser(1);
    this.props.fetchDevices();
    this.props.fetchUser(1);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
          <Route component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
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
  createRoom,
  fetchRoomsforUser,
  fetchDevices,
  fetchUser,
})(App);
