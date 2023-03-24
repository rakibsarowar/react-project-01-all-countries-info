import React, { useEffect, useState } from 'react';

const Countries = () => {
    // Use state -------------------------------------------------
    const [Countries, setCountries] = useState([]);

    // Use Effect ------------------------------------------------
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>console.log(data))
    },[])

    return (
        <div>
            <p>This is the post</p>
        </div>
    );
};

export default Countries;