import React, { Component } from 'react'
import Card from './components/Card'

export default class Devices extends Component {
	render() {
		return (
			<React.Fragment>
				<Card title="Devices 2" img="https://manofmany.com/wp-content/uploads/2017/09/Masculine-Living-Room-Ideas-Inspirations-7.jpg" content="Not that hard, sometimes tricky, but not hard" buttonType="primary" buttonText="Get me there" />
				<Card title="Devices 1" img="https://media.architecturaldigest.com/photos/567899767fd9a58978b7c398/master/w_1600%2Cc_limit/the-perfect-guest-room-05.jpeg" content="Not that hard, sometimes tricky, but not hard" buttonType="accent" buttonText="Get me there" />
			</React.Fragment>
		)
	}
}
