import {Component } from 'react';
import AirplaneGallery from './AirplaneGallery';
import FlightGallery from './FlightGallery';

class ShowAirplane extends Component {
    render() {
        return (
            <div>
                <h1>Some Airplanes</h1>
                {/* <FlightGallery flights={ FlightGallery.flights } /> */}
                {/* <AirplaneGallery airplanes={ AirplaneGallery.airplanes } /> */}
            </div>
        );
    }
}

export default ShowAirplane;