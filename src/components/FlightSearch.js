import React, { Component } from 'react';
import FlightBooker from './FlightForm';

class FlightSearch extends Component {
    render() {
        return (
            <div>
                <h1>Search Flights</h1>
                <FlightBooker />
            </div>
        )
    }
}

export default FlightSearch;