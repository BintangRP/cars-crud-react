import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DashboardEditPage = () => {
	const id = useParams();
	console.log();
	const navigate = useNavigate();
	const [newCar, setNewCar] = useState(null);

	useEffect(() => {
		fetchCar(id.id);
	}, [id.id]);

	const fetchCar = async (id) => {
		try {
			const res = await fetch(`http://localhost:8000/cars/${id}`);
			const data = await res.json();
			setNewCar(data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewCar((prevCar) => ({
			...prevCar,
			[name]: value,
		}));
	};

	const updateCar = async (id) => {
		try {
			await fetch(`http://localhost:8000/cars/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newCar),
			});
			navigate("/admin/cars");
		} catch (err) {
			console.error(err);
		}
	};

	if (!newCar) return <div>Loading...</div>;

	return (
		<>
			<div className="container my-5">
				<h1>Edit Car</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						updateCar(newCar.id);
					}}
				>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						className="form-control my-1"
						value={newCar.name}
						onChange={handleChange}
						placeholder="name"
					/>
					<label htmlFor="type">Type</label>
					<input
						type="text"
						name="type"
						className="form-control my-1"
						value={newCar.type}
						onChange={handleChange}
						placeholder="Type"
					/>
					<label htmlFor="image">Image</label>
					<input
						type="text"
						name="image"
						className="form-control my-1"
						value={newCar.image}
						onChange={handleChange}
						placeholder="Image URL"
					/>
					<label htmlFor="rentPerDay">Rent per Day</label>
					<input
						type="number"
						name="rentPerDay"
						className="form-control my-1"
						value={newCar.rentPerDay}
						onChange={handleChange}
						placeholder="Rent per Day"
					/>
					<label htmlFor="availableAt">Available At</label>{" "}
					<input
						type="datetime-local"
						name="availableAt"
						className="form-control my-1"
						value={newCar.availableAt}
						onChange={handleChange}
						placeholder="Available At"
					/>
					<button type="submit" className="btn btn-primary my-2">
						Update Car
					</button>
				</form>
				<button className="btn btn-secondary" onClick={() => navigate("/admin/cars")}>
					Cancel
				</button>
			</div>
		</>
	);
};

export default DashboardEditPage;
