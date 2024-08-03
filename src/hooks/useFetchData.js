import { useCallback, useEffect, useState } from "react";
const API = "https://restcountries.com/v3.1/all";

const useFetchData = (region) => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(async () => {
		setLoading(true);
		try {
			const countries = JSON.parse(localStorage.getItem("countries"));
			if (countries) {
				if (region === "All") setCountries(countries);
				else setCountries(countries.filter((c) => c.region === region));
			} else {
				const req = await fetch(API);
				const data = await req.json();
				if (region === "All") setCountries(data);
				else setCountries(data.filter((c) => c.region === region));
				localStorage.setItem("countries", JSON.stringify(data));
			}
		} catch (err) {
			alert("Something went wrong");
		} finally {
			setLoading(false);
		}
	}, [region]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { loading, countries, setCountries };
};

export default useFetchData;
