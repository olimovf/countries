import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Form from './Form';
import Loading from './Loading';
const API = 'https://restcountries.com/v3.1/all';

function Main() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (localStorage.getItem("regionCountries")) {
                    setCountries(JSON.parse(localStorage.getItem("regionCountries")));
                } else if (localStorage.getItem("countries")) {
                    setCountries(JSON.parse(localStorage.getItem("countries")));
                } else {
                    const req = await fetch(API);
                    const initialCountries = await req.json();
                    localStorage.setItem("countries", JSON.stringify(initialCountries));
                    setCountries(initialCountries);
                }
            } catch (err) {
                alert("Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const filterRegion = (region) => {
        if (region === 'All') {
            setCountries(JSON.parse(localStorage.getItem("countries")));
            localStorage.removeItem('regionCountries');
            return;
        }
        const newCountries = JSON.parse(localStorage.getItem("countries")).filter(country => country.region === region);
        setCountries(newCountries);
        localStorage.setItem('regionCountries', JSON.stringify(newCountries));
    }

    const searchCountry = (country) => {
        const initialCountries = JSON.parse(localStorage.getItem("regionCountries")) || JSON.parse(localStorage.getItem("countries"));
        const newCountries = initialCountries.filter(aCountry => {
            if (aCountry.name.common.toLowerCase().includes(country.toLowerCase())) {
                return aCountry;
            } else {
                return null;
            }
        });
        setCountries(newCountries);
    }

    const getOptions = localStorage.getItem("countries") !== null ? [...[...new Set(JSON.parse(localStorage.getItem("countries")).map(country => country.region))].sort(), 'All'] : [];

    return (
        <main className='main'>
            <div className='container'>
                <Form
                    filterRegion={filterRegion}
                    searchCountry={searchCountry}
                    getOptions={getOptions}
                />
                {loading
                    ? <Loading />
                    : <Cards
                        countries={countries}
                    />}
            </div>
        </main>
    );
}

export default React.memo(Main);
