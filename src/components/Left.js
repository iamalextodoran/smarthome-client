import React, { Component } from 'react';
import Weather from './Weather';
import Light from './Light';
import Temperature from './Temperature';
import Music from './Music';

export default class Left extends Component {
    render() {
        return (
            <div className="layout-column layout-align-start-end flex-30">
                <Weather />
                <Light />
                <Temperature />
                <Music />
            </div>
        )
    }
}
