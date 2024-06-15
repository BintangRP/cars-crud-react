import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LFCarPage from "./components/LFCarPage";
import Header from "./components/dashboard/Header";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import DasboardCreatePage from "./components/dashboard/DasboardCreatePage";
import DashboardEditPage from "./components/dashboard/DashboardEditPage";
import Coba from "./components/Coba";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="content">
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/coba" element={<Coba />} />
						<Route path="/cars" element={<LFCarPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/admin/cars" element={<Header />} />
						<Route path="/admin/cars/create" element={<DasboardCreatePage />} />
						<Route path="/admin/cars/edit/:id" element={<DashboardEditPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
