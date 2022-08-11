import React, { Component, useState } from 'react';
// import _ from 'lodash';



const AirplaneGallery = (props) => {
    return (
        <div>
            <h2>{ props.airplanes.length } Burning Airplanes</h2>
            <table>
                <thead>
                    <tr>
                    <th>Airplane name</th>
                    <th>Capacity</th>
                    <th colSpan="2"></th>
                    </tr>
                </thead>
            
            
                <tbody>

                    { props.airplanes.map((a) => {
                        return (
                            <tr key={ a.id }>
                                <td>{ a.name }</td>
                                <td>{ a.rows * a.columns }</td>
                            </tr>
                        )
                    })}
                                       
                    {/* { props.airplanes.map((f) => <tr key={ f.id }>{ f.airplane_number }</tr>) } */}

                </tbody>

            </table>
        </div>
    )
}

export default AirplaneGallery