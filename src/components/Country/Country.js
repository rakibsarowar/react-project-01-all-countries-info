import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props)
    return (
        <div className='country'>
            <h2>Country Name:{props.country.name.common} </h2>
            <p>Population:{props.country.population} </p>
            <p><small>Area: {props.country.area}</small></p>
        </div>
    );
};

export default Country;