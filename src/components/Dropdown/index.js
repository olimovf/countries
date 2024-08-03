import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";
import ClickOutside from "../ClickOutside";

const options = [
	"Africa",
	"Americas",
	"Antarctic",
	"Asia",
	"Europe",
	"Oceania",
	"All",
];

const Dropdown = ({ region, setRegion }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	const filterRegion = (selectedRegion) => {
		setRegion(selectedRegion);
		setOpen(false);
	};

	return (
		<div className="main__dropdown">
			<button
				className="btn dropdown-btn"
				onClick={() => setOpen(!open)}
				ref={ref}
			>
				{region === "All" ? "Filter by Region" : region}{" "}
				<IoIosArrowDown
					className={`fas fa-chevron-down dropdown-icon ${
						open ? "rotate" : ""
					}`}
				/>
			</button>
			<ClickOutside
				onClickOutside={() => setOpen(false)}
				excludedElements={[ref]}
			>
				<ul className={`dropdown-content ${open ? "" : "hidden"}`}>
					{options.map((option, index) => (
						<li
							key={index}
							className="dropdown-item"
							onClick={() => filterRegion(option)}
						>
							{option}
						</li>
					))}
				</ul>
			</ClickOutside>
		</div>
	);
};

export default Dropdown;
