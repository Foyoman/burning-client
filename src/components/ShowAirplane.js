import axios from 'axios';
import {Component } from 'react';
import AirplaneGallery from './AirplaneGallery';
import FlightGallery from './FlightGallery';

const SERVER_URL = 'https://burning-airlines-92-dream-team.herokuapp.com/airplanes.json';

class ShowAirplane extends Component {
    
    state = {
        newName: '',
        newRow: 0,
        newCol: 0,
        planeCreated: false
    }

    _handleName = (event) => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newName: value }));
    };

    _handleRow = (event) => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newRow: value }));
    }

    _handleCol = (event) => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newCol: value }));
    }

    _handleCreate = (() => {
        const data = {
            name: this.state.newName,
            rows: this.state.newRow,
            columns: this.state.newCol
        }

        axios.post(SERVER_URL, data, { headers: {
            'Content-Type': 'application/json',
        }, }).then(res => {
            if(res.status === 200) {
                console.log('plane created');
                this.setState({ planeCreated: true });
            }
        })
    })

    render() {
        if (this.planeCreated === true) {
            return <redirect to ={{ pathname: '/airplanes'}} />;
        }
        return (
            <div id="search-form">
                <h3>Plane Name</h3>
                <input onChange={ this._handleName } placeholder="Enter Name" />
                
                <h3>Rows</h3>
                <input onChange={ this._handleRow } type="number" placeholder="Rows" />
                
                <h3>Colums</h3>
                <input onChange={ this._handleCol } type="number" placeholder="Columns" />
                
                <button onClick={ this._handleCreate }>Create</button>
            </div>
        );
    }
}

export default ShowAirplane;