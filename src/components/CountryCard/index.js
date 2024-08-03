import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CountryCard = ({ country }) => {
	return (
		<article className="main__card">
			<Link to={`/countries/${country.cca3}`} className="main__link">
				<img
					className="main__card-img"
					src={country.flags.png}
					alt={country.cca3}
				/>
			</Link>
			<div className="main__content">
				<h3 className="main__title">{country.name.common}</h3>
				<p className="main__subtitle">
					Population: {country.population.toLocaleString()}
				</p>
				<p className="main__subtitle">Region: {country.region}</p>
				<p className="main__subtitle">
					Capital: {country.capital ? country.capital[0] : ""}
				</p>
			</div>
		</article>
	);
};

export default React.memo(CountryCard);
