import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const DasboardCreatePage = () => {
	const [newCar, setNewCar] = useState({
		id: "",
		name: "",
		type: "",
		image: "",
		rentPerDay: null,
		availableAt: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewCar((prevCar) => ({
			...prevCar,
			[name]: value,
		}));
	};

	const createCar = async () => {
		try {
			const carWithId = { ...newCar, id: uuidv4() };
			await fetch("http://localhost:8000/cars", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(carWithId),
			});
			navigate("/admin/cars");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div className="container">
				<h1 className="mt-5">Create New Car</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						createCar();
					}}
				>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							value={newCar.name}
							onChange={handleChange}
							placeholder="name"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="type">Type</label>
						<input
							type="text"
							className="form-control"
							id="type"
							name="type"
							value={newCar.type}
							onChange={handleChange}
							placeholder="type"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="image">Image URL</label>
						<input
							type="text"
							className="form-control"
							id="image"
							name="image"
							value={newCar.image}
							onChange={handleChange}
							placeholder="Image URL"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="rentPerDay">Rent per Day</label>
						<input
							type="number"
							className="form-control"
							id="rentPerDay"
							name="rentPerDay"
							value={newCar.rentPerDay}
							onChange={handleChange}
							placeholder="Rent per Day"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="availableAt">Available At</label>
						<input
							type="datetime-local"
							className="form-control"
							id="availableAt"
							name="availableAt"
							value={newCar.availableAt}
							onChange={handleChange}
							placeholder="Available At"
							required
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Create Car
					</button>
				</form>
				<button className="btn btn-secondary" onClick={() => navigate("/admin/cars")}>
					Cancel
				</button>
			</div>
		</>
	);
};

export default DasboardCreatePage;
