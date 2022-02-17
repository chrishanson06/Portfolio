import React from "react";
import <logo className="svg"></logo> ;
import "./App.css";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />


			</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
