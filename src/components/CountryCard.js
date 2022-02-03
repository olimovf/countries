import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
    return (
        <article className='main__card'>
            <Link to={`/countries/${country.cca3}`} className='main__link'>
                <img className="main__card-img" src={country.flags.png} />
            </Link>
            <div className="main__content">
                <h3 className="main__title">{country.name.common.length > 25 ? country.name.common.substr(0, 25) + '...' : country.name.common}</h3>
                <p className="main__subtitle">Population: {country.population.toLocaleString()}</p>
                <p className="main__subtitle">Region: {country.region}</p>
                <p className="main__subtitle">Capital: {country.capital ? country.capital[0] : ''}</p>
            </div>
        </article>
    );
}

export default React.memo(CountryCard);
