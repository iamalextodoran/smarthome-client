import React, { Component } from 'react'
import Button from '../components/Button'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { description: "This is a room, one of a kind, unique 1", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg", id: 1, name: "big room" },
        { description: "This is a room, one of a kind, unique 2", img: "https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg", id: 2, name: "small room" },
        { description: "This is a room, one of a kind, unique 3", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg", id: 3, name: "living room" }
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.rooms.map((room) => (


          <div key={room.id} className="card">
            <div className="content">
              <h3>{room.name}</h3>
              <p>{room.description}</p>

              <div className="layout-row layout-align-space-between-center">
                <div className="layout-column layout-align-none-center flex-60">
                  <img src={room.img} style={{ borderRadius: "20px" }} width="80%"/>
                </div>

                <div className="layout-column layout-align-start-start flex-30">
                  <p style={{marginBottom: "-15px"}}>Lights on : 3</p>
                  <p style={{marginBottom: "-15px"}}>Temperature: 20 C</p>
                  <p>Blinds open</p>
                </div>
              </div>

            </div>
            <div className="interactions">
              <Button raised="true" size="medium" type="accent" text="Get me there" />
            </div>
          </div>


        ), [this.state.rooms])}
      </React.Fragment>
    )
  }
}