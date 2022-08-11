import axios from 'axios';
import { random } from 'lodash';
import {Component } from 'react';
import AirplaneGallery from './AirplaneGallery';
import FlightGallery from './FlightGallery';

const SERVER_URL = 'https://burning-airlines-92-dream-team.herokuapp.com/flights.json';

class CreateFlight extends Component {
    
    state = {
        newOrigin: '',
        newDestination: '',
        newDate: '',
        newFlightNumber: '',
        newAirplane_id: Math.floor(Math.random() * 5) + 1,
        flightCreated: false
    }

    _handleOrigin = (event) => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newOrigin: value }));
    };

    _handleDestination = (event) => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newDestination: value }));
    }

    _handleDate = (event) => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newDate: value }));
    }

    _handleFlightNumber = (event) => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newFlightNumber: value }));
    }

    _handleCreate = (() => {
        const data = {
            origin: this.state.newOrigin,
            destination: this.state.newDestination,
            date: this.state.newDate,
            flight_number: this.state.newFlightNumber
        }

        axios.post(SERVER_URL, data, { headers: {
            'Content-Type': 'application/json',
        }, }).then(res => {
            if(res.status === 200) {
                console.log('flight created');
                this.setState({ flightCreated: true });
            }
        })
    })

    render() {
        if (this.flightCreated === true) {
            return <redirect to ={{ pathname: '/flights'}} />;
        }
        return (
            <div id="search-form">
                <h3>Origin</h3>
                <input onChange={ this._handleOrigin } type="text" placeholder="Origin" />
                
                <h3>Destination</h3>
                <input onChange={ this._handleDestination } type="text" placeholder="Destination" />
                
                <h3>Date</h3>
                <input onChange={ this._handleDate } type="date" placeholder="Date" />
                
                <h3>Flight Number</h3>
                <input onChange={ this._handleFlightNumber } type="text" placeholder="Flight Number" />

                <button>Create</button>
            </div>
        );
    }
}

export default CreateFlight;