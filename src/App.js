import Country from "./pages/Country";
import Main from "./pages/Main";
import Header from "./components/Header";
import TopButton from "./components/TopButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route index path="/" element={<Main />} />
				<Route path="/countries/:countryCode" element={<Country />} />
			</Routes>
			<TopButton />
		</Router>
	);
};

export default App;
