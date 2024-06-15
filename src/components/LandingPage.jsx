import React from "react";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";

function LandingPage() {
	const sliderRef = useRef(null);

	useLayoutEffect(() => {
		if (sliderRef.current) {
			const slider = tns({
				container: sliderRef.current,
				mode: "carousel",
				mouseDrag: true,
				// autoWidth: true,
				responsive: {
					1000: {
						items: 4,
						gutter: 32,
						center: true,
					},
					500: {
						items: 1,
						fixedWidth: 720,
						gutter: 32,
						center: true,
						loop: true,
					},
					0: {
						items: 1,
						center: true,
						fixedWidth: 350,
						gutter: 32,
					},
				},
				controlsPosition: "bottom",
				controlsContainer: "#tns-controls",
				prevButton: ".prev-button",
				nextButton: ".next-button",
				nav: false,
				preventScrollOnTouch: "auto",
			});
		}
	}, []);
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg fixed-top">
					<div className="container-lg w-100">
						<Link className="navbar-brand" to="/">
							<img src="/assets/img/logo.png" alt="logo" />
						</Link>
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
										<Link className="btn-register" to="/login">
											<button className="btn btn-success">Register</button>
										</Link>
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
						<Link to="/cars" className="link">
							<button className="btn btn-success fw-bold mb-5">Mulai Sewa Mobil</button>
						</Link>
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
			</div>
			<div
				id="our-services-section"
				className="container-lg my-5"
				data-aos="zoom-in-down"
				data-aos-duration={700}
			>
				<div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
					<div className="jumbotron-fluid text-center my-5">
						<img src="/assets/img/img_service.png" alt="Service" height="100%" width="100%" />
					</div>
					<div className="my-3">
						<h2 className="fw-bold">Best Car Rental for any kind of trip in Purwokerto!</h2>
						<p>
							Sewa mobil di Purwokerto bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
							lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
							wedding, meeting, dll.
						</p>
						<div className="d-flex align-items-center my-2">
							<img src="/assets/img/checklist.png" className="me-3" height="24px" width="24px" />
							<span>Sewa Mobil Dengan Supir di Purwokerto 12 Jam</span>
						</div>
						<div className="d-flex align-items-center my-2">
							<img src="/assets/img/checklist.png" className="me-3" height="24px" width="24px" />
							<span>Sewa Mobil Lepas Kunci di Purwokerto 24 Jam</span>
						</div>
						<div className="d-flex align-items-center my-2">
							<img src="/assets/img/checklist.png" className="me-3" height="24px" width="24px" />
							<span>Sewa Mobil Jangka Panjang Bulanan</span>
						</div>
						<div className="d-flex align-items-center my-2">
							<img src="/assets/img/checklist.png" className="me-3" height="24px" width="24px" />
							<span>Gratis Antar - Jemput Mobil di Bandara</span>
						</div>
						<div className="d-flex align-items-center my-2">
							<img src="/assets/img/checklist.png" className="me-3" height="24px" width="24px" />
							<span>Layanan Airport Transfer / Drop In Out</span>
						</div>
					</div>
				</div>
			</div>
			<div
				id="why-us-section"
				className="container-lg my-5"
				data-aos="zoom-in-down"
				data-aos-duration={700}
			>
				<div className="w-100">
					<h2 className="fw-bold">Why Us?</h2>
					<p>Mengapa harus pilih Binar Car Rental?</p>
				</div>
				<div className="w-100">
					<div className="row g-3">
						<div className="col-sm-12 col-md-3">
							<div className="card mx-auto my-1 bg-hover-yellow">
								<div className="card-body">
									<img src="/assets/img/icon_complete.png" alt="" height={32} width={32} className="mt-3" />
									<h5 className="card-title fw-bold my-3" style={{ fontSize: 16 }}>
										Mobil Lengkap
									</h5>
									<p className="card-text">
										Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-3">
							<div className="card mx-auto my-1 bg-hover-red">
								<div className="card-body">
									<img src="/assets/img/icon_price.png" alt="" height={32} width={32} className="mt-3" />
									<h5 className="card-title fw-bold my-3" style={{ fontSize: 16 }}>
										Harga Murah
									</h5>
									<p className="card-text">
										Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-3">
							<div className="card mx-auto my-1 bg-hover-blue">
								<div className="card-body">
									<img src="/assets/img/icon_24hrs.png" alt="" height={32} width={32} className="mt-3" />
									<h5 className="card-title fw-bold my-3" style={{ fontSize: 16 }}>
										Layanan 24 Jam
									</h5>
									<p className="card-text">
										Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-3">
							<div className="card mx-auto my-1 bg-hover-green">
								<div className="card-body">
									<img
										src="/assets/img/icon_professional.png"
										alt=""
										height={32}
										width={32}
										className="mt-3"
									/>
									<h5 className="card-title fw-bold my-3" style={{ fontSize: 16 }}>
										Sopir Profesional
									</h5>
									<p className="card-text">
										Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				id="testimonial-section"
				className="container-fluid my-5 p-sm-0 p-md-0"
				data-aos="fade-up"
				data-aos-duration={700}
			>
				<div className="d-flex justify-content-center flex-column text-center">
					<h2 className="fw-bold">Testimonial</h2>
					<p>Berbagai review positif dari para pelanggan kami</p>
				</div>
				<div ref={sliderRef} className="my-slider w-100">
					<div className="">
						<div
							className="slider-sm d-flex rounded align-items-center"
							style={{ backgroundColor: "#f1f3ff", padding: "70px 20px" }}
						>
							<div className="mx-3 tns-img-item">
								<img src="/assets/img/img_photo.png" alt="Photo2" className="" />
							</div>
							<div className="mx-4">
								<div className="mb-3 tns-stars">
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
								</div>
								<p>
									“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
									sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod”
								</p>
								<p className="fw-semibold mt-1">Bintang Pasha 20, Purwokerto</p>
							</div>
						</div>
					</div>
					<div className="">
						<div
							className="slider-sm d-flex rounded align-items-center"
							style={{ backgroundColor: "#f1f3ff", padding: "70px 20px" }}
						>
							<div className="mx-3 tns-img-item">
								<img src="/assets/img/img_photo2.png" alt="Photo2" className="" />
							</div>
							<div className="mx-4">
								<div className="mb-3 tns-stars">
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
								</div>
								<p>
									“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
									sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod”
								</p>
								<p className="fw-semibold mt-1">Pasha Bintang 20, Purwokerto</p>
							</div>
						</div>
					</div>
					<div className="">
						<div
							className="slider-sm d-flex rounded align-items-center"
							style={{ backgroundColor: "#f1f3ff", padding: "70px 20px" }}
						>
							<div className="mx-3 tns-img-item">
								<img src="/assets/img/img_photo2.png" alt="Photo2" className="" />
							</div>
							<div className="mx-4">
								<div className="mb-3 tns-stars">
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
								</div>
								<p>
									“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
									sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod”
								</p>
								<p className="fw-semibold mt-1">Fafa Pasha 20, Purwokerto</p>
							</div>
						</div>
					</div>
					<div className="">
						<div
							className="slider-sm d-flex rounded align-items-center"
							style={{ backgroundColor: "#f1f3ff", padding: "70px 20px" }}
						>
							<div className="mx-3 tns-img-item">
								<img src="/assets/img/img_photo.png" alt="Photo2" className="" />
							</div>
							<div className="mx-4">
								<div className="mb-3 tns-stars">
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
									<img src="/assets/img/star.png" alt="" height="16px" width="16px" />
								</div>
								<p>
									“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
									sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod”
								</p>
								<p className="fw-semibold mt-1">Jina Yuma 20, Purwokerto</p>
							</div>
						</div>
					</div>
				</div>
				<div
					id="tns-controls"
					className="d-flex align-items-center justify-content-center my-3 gap-2"
					aria-label="Carousel Navigation"
					tabIndex={0}
				>
					<div className="prev-button">
						<div className="previous-button border rounded-circle p-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="20px" width="20px">
								<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
							</svg>
						</div>
					</div>
					<div className="next-button ms-2">
						<div className="next-button border rounded-circle p-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="20px" width="20px">
								<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div
				id="jumbotron-sewa-mobil-pwt"
				className="container-lg my-5"
				data-aos="zoom-in-up"
				data-aos-duration={700}
			>
				<div
					className="py-5 d-flex justify-content-center align-items-center flex-column rounded"
					style={{ backgroundColor: "#0d28a6" }}
				>
					<div className="gap-3 text-center mb-5 pt-5">
						<h1 className="fw-bold text-white mb-3">Sewa Mobil di Purwokerto Sekarang</h1>
						<small className="text-white-50" style={{ maxWidth: 40 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</small>
					</div>
					<Link to="/cars" className="link">
						<button className="btn btn-success mb-3">Mulai Sewa Mobil</button>
					</Link>
				</div>
			</div>
			<div
				id="faq-section"
				className="container-lg my-5"
				data-aos="zoom-out-right"
				data-aos-duration={700}
			>
				<div className="row row-cols-1 row-cols-md-2 my-5">
					<div className="col my-4">
						<h2 className="fw-bold">Frequently Asked Question</h2>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
					</div>
					<div className="col">
						<div className="accordion accordion-flush my-3" id="accordionExample">
							<div className="accordion-item border rounded-1 my-2">
								<h3 className="accordion-header" id="headingOne">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="false"
										aria-controls="collapseOne"
									>
										Apa saja syarat yang dibutuhkan?
									</button>
								</h3>
								<div
									id="collapseOne"
									className="accordion-collapse collapse"
									aria-labelledby="headingTwo"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										Eu torquent justo litora fames dui class tempus tristique ornare mi enim si convallis
										pellentesque leo quis libero sociosqu elit viverra nulla faucibus potenti diam inceptos
										feugiat quam primis nullam nam nec
									</div>
								</div>
							</div>
							<div className="accordion-item border rounded-1 my-2">
								<h3 className="accordion-header" id="headingTwo">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										Berapa hari minimal sewa mobil lepas kunci?
									</button>
								</h3>
								<div
									id="collapseTwo"
									className="accordion-collapse collapse"
									aria-labelledby="headingTwo"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										Eu torquent justo litora fames dui class tempus tristique ornare mi enim si convallis
										pellentesque leo quis libero sociosqu elit viverra nulla faucibus potenti diam inceptos
										feugiat quam primis nullam nam nec
									</div>
								</div>
							</div>
							<div className="accordion-item border rounded-1 my-2">
								<h3 className="accordion-header" id="headingThree">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										Berapa hari sebelumnya sebaiknya booking sewa mobil?
									</button>
								</h3>
								<div
									id="collapseThree"
									className="accordion-collapse collapse"
									aria-labelledby="headingThree"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										Eu torquent justo litora fames dui class tempus tristique ornare mi enim si convallis
										pellentesque leo quis libero sociosqu elit viverra nulla faucibus potenti diam inceptos
										feugiat quam primis nullam nam nec
									</div>
								</div>
							</div>
							<div className="accordion-item border rounded-1 my-2">
								<h2 className="accordion-header" id="headingFour">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFour"
										aria-expanded="false"
										aria-controls="collapseFour"
									>
										Apakah ada biaya antar jemput?
									</button>
								</h2>
								<div
									id="collapseFour"
									className="accordion-collapse collapse"
									aria-labelledby="headingFour"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										Eu torquent justo litora fames dui class tempus tristique ornare mi enim si convallis
										pellentesque leo quis libero sociosqu elit viverra nulla faucibus potenti diam inceptos
										feugiat quam primis nullam nam nec
									</div>
								</div>
							</div>
							<div className="accordion-item border rounded-1 my-2">
								<h2 className="accordion-header" id="headingFive">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFive"
										aria-expanded="false"
										aria-controls="collapseFive"
									>
										Bagaimana jika terjadi kecelakaan?
									</button>
								</h2>
								<div
									id="collapseFive"
									className="accordion-collapse collapse"
									aria-labelledby="headingFive"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										Eu torquent justo litora fames dui class tempus tristique ornare mi enim si convallis
										pellentesque leo quis libero sociosqu elit viverra nulla faucibus potenti diam inceptos
										feugiat quam primis nullam nam nec
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-lg mt-5 py-5" data-aos="zoom-out-right" data-aos-duration={700}>
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
								<img src="/assets/img/logo.png" alt="Logo" />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default LandingPage;
