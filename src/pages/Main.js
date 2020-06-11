import React, { Component } from "react";
import Top from "../components/Top";
import Footer from "../components/Footer";
import Home from "./Home";
import Left from "../components/Left";
import { connect } from "react-redux";
import { fetchRoomsforUser } from "../actions/roomsActions";
import { Route } from "react-router-dom";
import Room from "../components/Room";
import Devices from "./Devices";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Top />
        <div className="layout-row layout-xs-column">
          <Left />
          <Route exact path="/" component={Home} />
          <Route exact path={`/room/:roomId`} component={Room} />
          <Route path="/devices" component={Devices} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.rooms,
});

export default connect(mapStateToProps, { fetchRoomsforUser })(Main);
