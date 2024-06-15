import React from "react";

function LFCarPage() {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg fixed-top">
					<div className="container-lg w-100">
						<a className="navbar-brand" href="/">
							<img src="/assets/img/logo.png" alt="logo" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span
								className="navbar-toggler-icon"
								data-bs-toggle="offcanvas"
								href="#offcanvasNavbar"
								role="button"
								aria-controls="offcanvasNavbar"
							/>
						</button>
						<div
							className="collapse navbar-collapse offcanvas offcanvas-end"
							tabIndex={-1}
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div className="offcanvas-header w-100 mx-2">
								<h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
									<a href="#" className="text-decoration-none text-black">
										BCR
									</a>
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								/>
							</div>
							<div className="w-100 d-none d-md-block">
								<ul className="nav nav-underline d-flex navbar-nav align-items-center justify-content-end fw-semibold">
									<li className="nav-item">
										<a className="nav-link" aria-current="page" href="#our-services-section">
											Our Services
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#why-us-section">
											Why Us
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#testimonial-section">
											Testimonial
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#faq-section">
											FAQ
										</a>
									</li>
									<li className="nav-item">
										<a className="btn-register" href="#register-redirect">
											<button className="btn btn-success">Register</button>
										</a>
									</li>
								</ul>
							</div>
							<div className="w-100 d-md-none">
								<ul className="nav nav-underline d-flex navbar-nav align-items-start justify-content-start mx-3 fw-bold">
									<li className="nav-item">
										<a className="nav-link" aria-current="page" href="#our-services-section">
											Our Services
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#why-us-section">
											Why Us
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#testimonial-section">
											Testimonial
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#faq-section">
											FAQ
										</a>
									</li>
									<li className="nav-item">
										<a className="btn-register" href="#register-redirect">
											<button className="btn btn-success">Register</button>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<div id="overlay-search" />
			<div
				id="hero-section"
				className="container-fluid my-5 w-100"
				data-aos="zoom-in-up"
				data-aos-duration={700}
				style={{ backgroundColor: "#f1f3ff" }}
			>
				<div className="row my-5 d-flex align-items-center">
					<div className="col-sm-12 col-md-6 ps-4 pe-4" style={{ backgroundColor: "#f1f3ff" }}>
						<h1 className="fw-bold mt-5">Sewa &amp; Rental Mobil Terbaik di kawasan Purwokerto</h1>
						<p>
							Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
							terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
						</p>
					</div>
					<div className="col-sm-12 col-md-6 jumbotron-fluid p-0 pt-5">
						<img
							src="/assets/img/img_car.png"
							alt="Car"
							height="100%"
							width="100%"
							style={{ bottom: 0, right: 0, backgroundColor: "#f1f3ff" }}
							className="position-relative object-fit-contain"
						/>
					</div>
				</div>
				<div className="search inputs">
					<div className="p-3 border bg-white rounded mt-2 shadow-lg mx-auto">
						<div className="row gx-3 gy-2 mx-3 align-items-center">
							<div className="col-sm-2 col-md-2 m-2">
								<label htmlFor="specificSizeSelect">
									Tipe Driver <span className="text-danger">*</span>
								</label>
								<select className="form-select inputs" id="tipeDriver" required="">
									<option value={0}>Pilih Tipe Driver</option>
									<option value={1}>Dengan Supir</option>
									<option value={2}>Tanpa Supir (Lepas Kunci)</option>
								</select>
							</div>
							<div className="col-sm-2 col-md-2 m-2">
								<label htmlFor="specificSizeSelect">
									Tanggal <span className="text-danger">*</span>
								</label>
								<input type="date" className="form-control inputs" id="inputDate" required="" />
							</div>
							<div className="col-sm-2 col-md-2 m-2">
								<label htmlFor="specificSizeSelect">
									Waktu Jemput/Ambil <span className="text-danger">*</span>
								</label>
								<input type="time" className="form-control inputs" id="inputHours" required="" />
							</div>
							<div className="col-sm-3 col-md-3 m-2">
								<label htmlFor="specificSizeInputGroupUsername">Jumlah Penumpang (Optional)</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control inputs"
										id="inputPenumpang"
										placeholder="Jumlah Penumpang"
									/>
									<div className="input-group-text">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={16}
											height={16}
											fill="currentColor"
											className="bi bi-people"
											viewBox="0 0 16 16"
										>
											<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
										</svg>
									</div>
								</div>
							</div>
							<div className="col-sm-2 col-md-2 mt-4">
								<button id="load-btn" onclick="runSearch()" className="btn btn-success">
									Cari Mobil
								</button>
							</div>
						</div>
					</div>
					<div id="clear-btn" />
				</div>
			</div>
			<div className="container-lg mt-5 col-md-9">
				<div
					id="cars-container"
					className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 mt-5"
				/>
			</div>
			<div className="container-lg mt-5 py-5 w-100" data-aos="zoom-out-right" data-aos-duration={700}>
				<footer className="mt-5 py-5">
					<div className="row row-cols-1 row-cols-md-4 d-flex justify-content-center flex-row flex-wrap">
						<div className="col">
							<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
							<p>binarcarrental@gmail.com</p>
							<p>081-233-334-808</p>
						</div>
						<style
							dangerouslySetInnerHTML={{
								__html:
									"\n\t\t\t\t\t\t.navigation-content:hover {\n\t\t\t\t\t\t\ttext-decoration: dashed;\n\t\t\t\t\t\t}\n\t\t\t\t\t",
							}}
						/>
						<div className="col">
							<p className="fw-semibold footer-nav-content">Our services</p>
							<p className="fw-semibold footer-nav-content">Why Us</p>
							<p className="fw-semibold footer-nav-content">Testimonial</p>
							<p className="fw-semibold footer-nav-content">FAQ</p>
						</div>
						<div className="col">
							<p>Connect with us</p>
							<div className="d-flex flex-row flex-wrap">
								<a href="#">
									<img
										src="/assets/img/icon_facebook.png"
										alt="Facebook"
										width="32px"
										height="32px"
										className="me-1 footer-sosmed"
									/>
								</a>
								<a href="#">
									<img
										src="/assets/img/icon_instagram.png"
										alt="Instagram"
										width="32px"
										height="32px"
										className="mx-1 footer-sosmed"
									/>
								</a>
								<a href="#">
									<img
										src="/assets/img/icon_twitter.png"
										alt="Twitter"
										width="32px"
										height="32px"
										className="mx-1 footer-sosmed"
									/>
								</a>
								<a href="#">
									<img
										src="/assets/img/icon_mail.png"
										alt="Email"
										width="32px"
										height="32px"
										className="mx-1 footer-sosmed"
									/>
								</a>
								<a href="#">
									<img
										src="/assets/img/icon_twitch.png"
										alt="Twitch"
										width="32px"
										height="32px"
										className="ms-1 footer-sosmed"
									/>
								</a>
							</div>
						</div>
						<div className="col">
							<p>Copyright Binar 2022 -</p>
							<a href="/">
								<img src="images/logo.png" alt="Logo" />
							</a>
						</div>
					</div>
				</footer>
			</div>
			{/* tiny-slider */}
			{/* bootstrap */}
			{/* aos animation */}
		</>
	);
}

export default LFCarPage;
