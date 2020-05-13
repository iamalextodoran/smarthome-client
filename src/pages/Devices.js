import React, { Component } from 'react'
import Lights from '../components/Lights';
import Blinds from '../components/Blinds';
import Windows from '../components/Windows';
import Temperatures from '../components/Temperatures';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Left from '../components/Left';

export default class Devices extends Component {
	render() {
		return (
			<React.Fragment>
				<Top />
				<div className="layout-row layout-xs-column">
					<Left />
					<div className="layout-row layout-align-end-start flex-wrap flex-70">
						<Lights />
						<Blinds />
						<Windows />
						{/* <Temperatures /> */}
					</div>
				</div>
				<Footer />
			</React.Fragment>
		)
	}
}
