import React, { Component } from 'react';
import axios from 'axios';

import FlightGallery from './FlightGallery';
import AirplaneGallery from './AirplaneGallery';
import FlightSearch from './FlightSearch';
import FlightBooker from './FlightBooker';
import _ from 'lodash';


const SERVER_URL = 'https://burning-airlines-92-dream-team.herokuapp.com/'; // Later: change this to the deployed URL

class BurningAirlines extends Component {
    constructor() {
        super();
        this.state = {
            flights: [],
            airplanes: []
        };
        this.saveFlight = this.saveFlight.bind(this);
        this.saveAirplane = this.saveAirplane.bind(this);
    }

    componentDidMount() {
        const fetchFlights = () => {
            axios(SERVER_URL + 'flights.json').then((response) => {
                this.setState({flights: response.data});
            }); // .then(() => {debugger});
            setTimeout(fetchFlights, 4000);
        };
        const fetchAirplanes = () => {
            axios(SERVER_URL + 'airplanes.json').then((response) => {
                this.setState({airplanes: response.data});
            });
            setTimeout(fetchAirplanes, 4000);
        }

        fetchFlights();
        fetchAirplanes();
    }

    render() {
        return (
            <div>
                <h1>Burning Airlines</h1>
                <FlightGallery flights={ this.state.flights } />
                <AirplaneGallery airplanes={ this.state.airplanes } />
                <FlightBooker 
                    flights={ this.state.flights }
                    airplanes={ this.state.airplanes } 
                />
            </div>
        )
    }
}

export default BurningAirlines