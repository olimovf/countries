import { useCallback, useState } from "react";
import CountryCard from "../../components/CountryCard";
import Loading from "../../components/Loading";
import SearchInput from "../../components/SearchInput";
import Dropdown from "../../components/Dropdown";
import useFetchData from "../../hooks/useFetchData";
import useTitle from "../../hooks/useTitle";
import "./style.css";

const Main = () => {
	useTitle("Countries");

	const [region, setRegion] = useState(
		() => localStorage.getItem("region") || "All"
	);
	const { loading, countries, setCountries } = useFetchData(region);

	const handleSetRegion = useCallback((newRegion) => {
		setRegion(newRegion);
		localStorage.setItem("region", newRegion);
	}, []);

	return (
		<div className="container">
			<div className="main__form">
				<SearchInput region={region} setCountries={setCountries} />
				<Dropdown region={region} setRegion={handleSetRegion} />
			</div>
			{loading ? (
				<Loading />
			) : (
				<div className="main__cards">
					{countries?.map((country) => (
						<CountryCard country={country} key={country.cca3} />
					))}
				</div>
			)}
		</div>
	);
};

export default Main;
