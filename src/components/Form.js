import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './Form.css';

function Form({ filterRegion, searchCountry, getOptions }) {
    const [showRegions, setShowRegions] = useState(false);
    const [region, setRegion] = useState('Filter by Region');

    const filteredCountries = (e) => {
        const txt = e.target.innerText;
        filterRegion(txt);
        setShowRegions(false);
    }

    useEffect(() => {
        const reg = localStorage.getItem('regionCountries') ? JSON.parse(localStorage.getItem('regionCountries'))[0].region : 'Filter by Region';
        setRegion(reg);
    }, [filteredCountries]);
    
    return (
        <div className='main__form'>
            <input 
                type="search" 
                className="main__input" 
                placeholder="Search for a country ..."
                onChange={(e) => searchCountry(e.target.value)}
            />
            <div className="main__dropdown">
                <button className="btn dropdown-btn" type='button' 
                    onClick={() => { setShowRegions(!showRegions); }}>
                    {region} <IoIosArrowDown className={`fas fa-chevron-down dropdown-icon ${showRegions ? 'rotate' : ''}`} />
                </button>
                <ul className={`dropdown-content ${showRegions ? '' : 'hidden'}`}>
                    {getOptions.map((option, index) => {
                        return <li 
                            key={index}
                            className='dropdown-item'
                            onClick={filteredCountries}
                            >{option}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default React.memo(Form);
