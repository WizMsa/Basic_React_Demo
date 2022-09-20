import React, { Component } from "react";
import axios from "axios";

class Location extends Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        }
    }
        componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
                (position) => this.setState( { latitude: position.coords.latitude,
                    longitude: position.coords.longitude }  ),
                (error) => console.log(error)
            )
        }
    render(){
        return(
            <div>
            <h4> { this.state.latitude } </h4>
            <h4> { this.state.longitude } </h4>
            { this.state.latitude  && this.state.longitude ? 
            <img src = {'https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&size=400x300&key=AIzaSyBjdWbxPJ_9K4S8psxmOGONjZI0QD39xo0'} alt="" /> : null
        }
            </div>
        )
    };
}
export default Location;