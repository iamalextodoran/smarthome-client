import React, { Component } from 'react'
import Lights from '../components/Lights';
import Blinds from '../components/Blinds';
import Windows from '../components/Windows';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Left from '../components/Left';
import { connect } from 'react-redux'
import { fetchRooms } from "../actions/roomsActions";

class Devices extends Component {
	render() {
		return (
			<React.Fragment>
				<Top />
				<div className="layout-row layout-xs-column">
					<Left />
					<div className="layout-row layout-align-end-start flex-wrap flex-70">
						<Lights rooms={this.props.rooms.rooms}/>
						<Blinds rooms={this.props.rooms.rooms}/>
						<Windows rooms={this.props.rooms.rooms}/>
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

export default connect(mapStateToProps, { fetchRooms })(Devices);
