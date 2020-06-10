import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Instead of BrowserRouter I have to use HashRouter for Github pages
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Room from "./components/Room";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Left from "./components/Left";
import { connect } from "react-redux";
import { fetchUsers, fetchUser, createUser } from "./actions/usersActions";
import { fetchRooms } from "./actions/roomsActions";
import { fetchDevices } from "./actions/devicesActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUsers();
    this.props.fetchRooms();
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

          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Top />
                <div className="layout-row layout-xs-column">
                  <Left />
                  <Home />
                </div>
                <Footer />
              </React.Fragment>
            )}
          />
          <Route exact path={`/room/:roomId`} component={Room} />
          <Route path="/devices" component={Devices} />

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
  fetchRooms,
  fetchDevices,
  fetchUser,
  createUser,
})(App);
