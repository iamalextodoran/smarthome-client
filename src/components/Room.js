import React, { Component } from 'react'
import Left from './Left';
import Top from './Top';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { description: "This is a room, one of a kind, unique 1", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg", id: 1, name: "Big room" },
        { description: "This is a room, one of a kind, unique 2", img: "https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg", id: 2, name: "Small room" },
        { description: "This is a room, one of a kind, unique 3", img: "https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg", id: 3, name: "Living room" },
        { description: "This is a room, one of a kind, unique 4", img: "https://www.thespruce.com/thmb/5o_dpOCoqBxM79wcGqWWA_qt50U=/5100x2869/smart/filters:no_upscale()/GettyImages-513040397-583b37d83df78c6f6ad71fe8.jpg", id: 4, name: "Guest room" }
      ],
    }
  } 

  render() {
    // console.log(this.props.match.path);
    // console.log(this.props.match.url);
    // console.log(this.props.match.params.id); //return the id
    const myConstant = 'To be implemented'
    
    return (
      <React.Fragment>
            <Top />
            <div className="layout-row layout-xs-column">
              <Left />
              <div className="layout-row layout-align-end-start flex-wrap flex-70">
                

                <h1>{myConstant}</h1>


              </div>
            </div>
          </React.Fragment>
    )
  }
}
