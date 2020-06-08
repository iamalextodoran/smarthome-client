import React, { Component } from "react";
import Header from "./Header";
import User from "./User";
import Menu from "./Menu";

import { connect } from "react-redux";
import { fetchUsers, createUser } from "../actions/usersActions";

class Top extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  componentDidMount() {
    console.log(this.props.users);
  }

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
const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { fetchUsers, createUser })(Top);
