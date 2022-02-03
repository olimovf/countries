import React from 'react';
import './Cards.css';
import CountryCard from './CountryCard';

function Cards({ countries }) {
    return (
        <div className='main__cards'>
            {countries.map((country, index) => {
                return <CountryCard country={country} key={index} />
            })}
        </div>
    );
}

export default React.memo(Cards);
