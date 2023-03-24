import React, { useEffect, useState } from 'react';

const Countries = () => {
    // Step 01: Use state -------------------------------------------------
    const [countries, setCountries] = useState([]);

    // Step 02: Use Effect ------------------------------------------------
    useEffect(()=>{

        // Step 03: fetching the data -------------------------------------
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // step 04: set the data ------------------------------------------
        .then(data =>setCountries(data))
    },[])

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            {
                countries.map(country=>console.log(country))
            }
        </div>
    );
};

export default Countries;