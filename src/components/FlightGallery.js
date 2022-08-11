import React from 'react';

const FlightGallery = (props) => {
    return (
        <div>
            <h2>{ props.flights.length } Burning Flights</h2>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>
                    <th>Flight no.</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Airplane</th>
                    <th>Available Seats</th>
                    <th colSpan="6"></th>
                    </tr>
                </thead>
            
                <tbody>
                    { props.flights.map((f) => {
                        return (
                            <tr key={ f.id }>
                                <td>{ f.flight_number }</td>
                                <td>{ f.origin }</td>
                                <td>{ f.destination }</td>
                                <td><marquee>{ f.date }</marquee></td>
                                <td><marquee>{ f.airplane.name }</marquee></td>
                                <td>{ f.seats.length - f.reservations.length }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FlightGallery