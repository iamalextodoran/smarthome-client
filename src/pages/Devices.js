import React, { Component } from 'react'
import Lights from '../components/Lights';
import Blinds from '../components/Blinds';
import Windows from '../components/Windows';
import { connect } from 'react-redux'
import { fetchRoomsforUser } from "../actions/roomsActions";

class Devices extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="layout-row layout-align-end-start flex-wrap flex-70">
					<Lights rooms={this.props.rooms.rooms}/>
					<Blinds rooms={this.props.rooms.rooms}/>
					<Windows rooms={this.props.rooms.rooms}/>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
  rooms: state.rooms
})

export default connect(mapStateToProps, { fetchRoomsforUser })(Devices);
