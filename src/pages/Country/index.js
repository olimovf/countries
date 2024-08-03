import { Link, useParams, useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loading";
import "./style.css";
import useTitle from "../../hooks/useTitle";

const Country = () => {
	const { countryCode } = useParams();
	useTitle(`Countries - ${countryCode}`);

	const navigate = useNavigate();
	const { loading, countries } = useFetchData("All");

	if (loading) return <Loading />;

	const country = countries?.find((c) => c?.cca3 === countryCode);
	const borderCountries =
		country?.borders &&
		country?.borders.map((border, index) => (
			<Link to={`/countries/${border}`} key={index} className="btn">
				{border}
			</Link>
		));

	return (
		<div className="country container">
			<div className="btns">
				<button className="btn backBtn" onClick={() => navigate(-1)}>
					<HiOutlineArrowLeft />
					&nbsp; Back
				</button>
				<button className="btn homeBtn" onClick={() => navigate("/")}>
					<FaHome />
					&nbsp; Home
				</button>
			</div>
			<div className="country__data">
				<div className="country__flag">
					<img src={country?.flags?.png} alt="card" />
				</div>
				<div className="country__content">
					<h2 className="country__name">{country?.name?.common}</h2>
					<div className="country__info">
						<div>
							<h4>Native Name:</h4>
							{country?.name?.official}
						</div>
						<div>
							<h4>Population:</h4>
							{country?.population?.toLocaleString()}
						</div>
						<div>
							<h4>Region:</h4>
							{country?.region}
						</div>
						<div>
							<h4>Sub Region:</h4>
							{country?.subregion}
						</div>
						<div>
							<h4>Capital:</h4>
							{country?.capital ? country?.capital[0] : ""}
						</div>
						<div>
							<h4>Top Level Domain:</h4>
							{country?.tld && country?.tld.join(", ")}
						</div>
						<div>
							<h4>Currencies:</h4>
							{country?.currencies &&
								Object.values(country?.currencies)[0].name}
						</div>
						<div>
							<h4>Languages:</h4>
							{country?.languages &&
								Object.values(country?.languages).join(", ")}
						</div>
					</div>
					{borderCountries && (
						<div className="country__borders">
							<h4>Border Countries:</h4>
							{borderCountries}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Country;
