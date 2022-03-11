import React from 'react';
import Country from './components/Country';
import Header from './components/Header';
import Main from './components/Main';
import TopButton from './components/TopButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route index path='/' element={<Main />} />
				<Route path="/countries/:countryCode" element={<Country />} />
			</Routes>
			<TopButton />
		</Router>
	);
}

export default App;