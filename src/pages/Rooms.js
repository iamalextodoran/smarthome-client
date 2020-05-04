import React, { Component } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon';

export default class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { description: "This is a room, one of a kind, unique 1", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg", id: 1, name: "Big room" },
        { description: "This is a room, one of a kind, unique 2", img: "https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg", id: 2, name: "Small room" },
        { description: "This is a room, one of a kind, unique 3", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg", id: 3, name: "Living room" },
        { description: "This is a room, one of a kind, unique 4", img: "https://lh3.googleusercontent.com/proxy/chQib78KIC5yUX-NUfcccw9WM5G6FbNT7tywiB96rsL2KKohQHqUIO5WKCSjCkhuK5fjiAKwqaSxeAxrbU5eJ-gxAqx3s5GA4fFvN1X5JZnxWTiIFrBLFonj4ZWgsxVB9CoZ2NT8WhmQyQm4__14S0HSAzSa_wkB61tz7y9r_jF2WQhlpipkES9_l3Q9i4iP", id: 4, name: "Guest room" }
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="layout-row layout-align-space-between-start flex-wrap">
          {this.state.rooms.map((room) => (


            <div key={room.id} className="card flex-50">
              <div className="content">
                <div className="layout-row layout-align-space-between-start">
                  <h1>{room.name}</h1>
                  <Icon icon="fas fa-edit" />
                </div>
                <p>{room.description}</p>

                <img src={room.img} style={{ borderRadius: "20px" }} width="80%" />

                <p style={{ marginBottom: "-15px" }}>Lights on : 3</p>
                <p style={{ marginBottom: "-15px" }}>Temperature: 20 C</p>
                <p style={{ marginBottom: "-15px" }}>Windws open</p>
                <p>Blinds open</p>

              </div>
              <div className="interactions">
                <Button raised="true" size="medium" type="accent" text="Get me there" />
              </div>
            </div>


          ), [this.state.rooms])}
        </div>
      </React.Fragment>
    )
  }
}
