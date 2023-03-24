import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    // Step 01: Use state -------------------------------------------------
    const [countries, setCountries] = useState([]);

    // Step 02: Use Effect ------------------------------------------------
    useEffect(() => {

        // Step 03: fetching the data -------------------------------------
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // step 04: set the data ------------------------------------------
            .then(data => setCountries(data))
    }, [])

    return (
        <div >
            <h1>Total Countries: {countries.length}</h1>
            <div className='countries-container'>
                {   // Step 05: Showing the data in UI ------------------------

                    /* 
                    checking the data from map -------------------
                    countries.map(country=>console.log(country)) 
                    */
                    countries.map(country => <Country
                        country={country}
                        key = {country.cca3}
                    ></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;