import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HandleCarList = () => {
	const [cars, setCars] = useState([]);
	const navigate = useNavigate();
	const [filteredCars, setFilteredCars] = useState([]);
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		fetchCars();
	}, []);

	useEffect(() => {
		handleFilter();
	}, [filter, cars]);

	const fetchCars = async () => {
		try {
			const res = await fetch("http://localhost:8000/cars");
			const data = await res.json();
			setCars(data);
			setFilteredCars(data);
		} catch (err) {
			if (err.name === "AbortError") {
				console.log("fetch aborted.");
			} else {
				console.error(err);
			}
		}
	};

	const deleteCar = async (id) => {
		try {
			await fetch(`http://localhost:8000/cars/${id}`, {
				method: "DELETE",
			});
			fetchCars();
		} catch (err) {
			console.error(err);
		}
	};

	const handleEdit = (car) => {
		navigate(`/admin/cars/edit/${car.id}`);
	};

	const handleFilter = () => {
		if (filter == "all") {
			setFilteredCars(cars);
		} else {
			console.log(filter);
			setFilteredCars(cars.filter((car) => car.type == filter));
		}
	};

	return (
		<div className="container-fluid py-4">
			<h1 className="mt-2">Car Management Dashboard</h1>
			<Link className="btn btn-primary" to="/admin/cars/create">
				Create New Car
			</Link>
			<div className="mt-4">
				<button className="btn btn-secondary mx-1" onClick={() => setFilter("all")}>
					All
				</button>
				<button className="btn btn-secondary mx-1" onClick={() => setFilter("small")}>
					Small
				</button>
				<button className="btn btn-secondary mx-1" onClick={() => setFilter("medium")}>
					Medium
				</button>
				<button className="btn btn-secondary mx-1" onClick={() => setFilter("large")}>
					Large
				</button>
			</div>
			<div className="row mt-4">
				{filteredCars.length > 0 ? (
					filteredCars.map((car) => (
						<div key={car.id} className="col-lg-3 mb-lg-0 mb-4">
							<div className="card z-index-2">
								<div className="card-body p-3">
									<img src={car.image} className="card-img-top" alt={`${car.name}`} />
									<h3 className="ms-2 mt-4 mb-0 card-title">
										{car.name} / <span>{car.type}</span>
									</h3>
									<p className="card-text">Rp{car.rentPerDay} / Hari</p>
									<p className="card-text">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="bi bi-clock"
											width="16"
											height="16"
										>
											<path d="M9.25 4a.75.75 0 0 1 .75.75v4.794l3.02 1.809a.75.75 0 1 1-.75 1.298l-3.77-2.262a.75.75 0 0 1-.25-.56V4.75a.75.75 0 0 1 .75-.75z" />
											<path
												fillRule="evenodd"
												d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"
											/>
										</svg>
										Available At {new Date(car.availableAt).toDateString()}
									</p>
									<button className="btn btn-danger btn-sm mx-1" onClick={() => deleteCar(car.id)}>
										Delete
									</button>
									<button className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(car)}>
										Edit
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<div>No cars available</div>
				)}
			</div>

			<div className="row my-4">
				<div className="col-lg-12 col-md-6 mb-md-0 mb-4">
					<div className="card">
						<div className="card-header pb-0">
							<div className="row">
								<div className="col-lg-6 col-7">
									<h6>Cars Stock</h6>
								</div>
								<div className="col-lg-6 col-5 my-auto text-end">
									<div className="dropdown float-lg-end pe-4">
										<a
											className="cursor-pointer"
											id="dropdownTable"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="fa fa-ellipsis-v text-secondary"></i>
										</a>
										<ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
											<li>
												<a className="dropdown-item border-radius-md" href="javascript:;">
													Action
												</a>
											</li>
											<li>
												<a className="dropdown-item border-radius-md" href="javascript:;">
													Another action
												</a>
											</li>
											<li>
												<a className="dropdown-item border-radius-md" href="javascript:;">
													Something else here
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="card-body px-0 pb-2">
							<div className="table-responsive">
								<table className="table align-items-center mb-0">
									<thead>
										<tr>
											<th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Nama Mobil
											</th>
											<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Type
											</th>
											<th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
												Foto
											</th>
											<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Budget
											</th>

											<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Handle Action
											</th>
										</tr>
									</thead>
									<tbody>
										{cars.length > 0 ? (
											cars.map((car) => (
												<tr key={car.id}>
													<td>
														<div className="d-flex px-2 py-1">
															<div className="d-flex flex-column justify-content-center">
																<h6 className="mb-0 text-sm">{car.name}</h6>
															</div>
														</div>
													</td>
													<td className="align-middle text-center text-sm">
														<span className="text-xs font-weight-bold">{car.type}</span>
													</td>
													<td>
														<div className="avatar-group mt-2 h-10 w-10">
															<img src={car.image} alt={car.nama} height="50px" />
														</div>
													</td>
													<td className="align-middle text-center text-sm">
														<span className="text-xs font-weight-bold">{car.rentPerDay}</span>
													</td>
													<td className="align-middle text-center text-sm">
														<button className="btn btn-danger btn-sm mx-1" onClick={() => deleteCar(car.id)}>
															Delete
														</button>
														<button className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(car)}>
															Edit
														</button>
													</td>
												</tr>
											))
										) : (
											<tr>
												<td>-</td>
												<td>-</td>
												<td>-</td>
												<td>-</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HandleCarList;
