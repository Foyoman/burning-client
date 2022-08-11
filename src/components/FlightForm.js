import React, { useState } from 'react';
import FlightBooker from './FlightBooker';

const FlightForm = (props) => {
    const [content, setContent] = useState('');


    const _handleSubmit = (event) => {
        event.preventDefault(); // stays on same page
        props.onSubmit(content);
        setContent('');
    };

    const _handleChange = (event) => {
        setContent(event.target.value); // this.setState (content: event.target.value)
    }

    return (
        <div>
            <form onSubmit={ _handleSubmit }>
                <input type="text" onChange={ _handleChange } value={ content } required />
                <button onClick={ content }>From</button>
                <input type="text" onChange={ _handleChange } value={ content }/>
                <button onClick={ content }>To</button>
                <input type="date" onChange={ _handleChange } value={ content }/>
                <button onClick={ content }>Depart</button>
                <input type="date" onChange={ _handleChange } value={ content }/>
                <button onClick={ content }>Return</button>
                <select onChange={ _handleChange }>
                    <option></option>
                    <option> 2 adult</option>
                    <option> 3 adult</option>
                    <option> 4 adult</option>
                </select>
            </form>
        </div>
    );
}

export default FlightForm;