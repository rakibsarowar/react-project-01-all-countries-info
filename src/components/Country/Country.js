import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props)

    // array destructuring ----------------------------------
    const {region,area, population,name,flags} = props.country;

    return (
        <div className='country'>
            <h2>Country Name:{name.common} </h2>
            <img src={flags.png} alt="" />
            <p>Population:{population} </p>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;