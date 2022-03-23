import React, { useEffect, useState } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import './Country.css';

function Country() {
    const { countryCode } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSingleCountryData = async (countryCode) => {
            setLoading(true);
            try {
                const country = JSON.parse(localStorage.getItem("countries")).filter(c => c.cca3 === countryCode);
                setCountry(country[0]);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        getSingleCountryData(countryCode);
    }, [countryCode]);

    return loading ? <Loading /> : (
        <div className='country container'>
            <div className="btns">
                <button className='btn backBtn' onClick={() => navigate(-1)}><HiOutlineArrowLeft />&nbsp; Back</button>
                <button className='btn homeBtn' onClick={() => navigate('/')}><FaHome />&nbsp; Home</button>
            </div>
            <div className="country__data">
                <div className="country__flag">
                    <img src={country.flags.png} alt='card' />
                </div>
                <div className="country__content">
                    <h2 className="country__name">{country.name.common}</h2>
                    <div className='country__info'>
                        <div><h4>NativeName:</h4>{country.name.official}</div>
                        <div><h4>Population:</h4>{country.population.toLocaleString()}</div>
                        <div><h4>Region:</h4>{country.region}</div>
                        <div><h4>Sub Region:</h4>{country.subregion}</div>
                        <div><h4>Capital:</h4>{country.capital ? country.capital[0] : ''}</div>
                        <div><h4>Top Level Domain:</h4>{country.tld && country.tld[0]}</div>
                        <div><h4>Currencies:</h4>{country.currencies && Object.values(country.currencies)[0].name}</div>
                        <div><h4>Languages:</h4>{country.languages && Object.values(country.languages).join(', ')}</div>
                    </div>
                    <div className="country__borders">
                        <h4>Border Countries:</h4>
                        {country.borders && country.borders.map((border, index) => {
                            return <Link to={`/countries/${border}`} key={index} className='btn'>{border}</Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Country;
