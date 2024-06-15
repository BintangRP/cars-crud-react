import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!email || !password) {
			setError("Email and password are required");
		} else {
			setError("");
			// Handle login logic here, for example, API call
			console.log("Login submitted with", { email, password });
		}
	};

	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-header">
								<h3 className="d-flex justify-content-center my-2">Login</h3>
							</div>
							<div className="card-body">
								{error && <div className="alert alert-danger">{error}</div>}
								<form onSubmit={handleSubmit}>
									<div className="form-group mb-3">
										<label htmlFor="email">Email</label>
										<input
											type="email"
											className="form-control"
											id="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="form-group mb-3">
										<label htmlFor="password">Password</label>
										<input
											type="password"
											className="form-control"
											id="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<button className="btn btn-outline-primary" type="submit">
										<Link to="/admin/cars">Login</Link>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
