import React, { Component } from 'react'
import Lights from '../components/Lights';
import Blinds from '../components/Blinds';
import Windows from '../components/Windows';
import Temperatures from '../components/Temperatures';

export default class Devices extends Component {
	render() {
		return (
			<React.Fragment>

        <Lights />
        <Blinds/>
        <Windows/>
        <Temperatures/>
        
			</React.Fragment>
		)
	}
}
