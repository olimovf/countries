import { useCallback, useEffect, useMemo, useState } from "react";
import "./style.css";

const SearchInput = ({ setCountries, region }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const allCountries = JSON.parse(localStorage.getItem("countries"));

	const countriesByRegion = useMemo(() => {
		return region === "All"
			? allCountries
			: allCountries.filter((c) => c.region === region);
	}, [region, allCountries]);

	const searchCountry = useCallback(
		(term) => {
			const newCountries = countriesByRegion.filter((country) =>
				country.name.common.toLowerCase().includes(term.toLowerCase())
			);
			setCountries(newCountries);
		},
		[countriesByRegion, setCountries]
	);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			searchCountry(searchTerm);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, [searchTerm, searchCountry]);

	return (
		<input
			type="search"
			className="main__input"
			placeholder="Search for a country ..."
			onChange={(e) => setSearchTerm(e.target.value)}
		/>
	);
};

export default SearchInput;
