import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./../assets/vendors/bootstrap/css/bootstrap.min.css";
import "./../assets/vendors/fontawesome/css/all.min.css";
import "./../assets/vendors/jquery-ui/jquery-ui.min.css";
import "./../assets/vendors/modal-video/modal-video.min.css";
import "./../assets/vendors/lightbox/dist/css/lightbox.min.css";
import "./../assets/vendors/slick/slick.css";
import "./../assets/vendors/slick/slick-theme.css";
import "./../style.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { WhatsAppIcon } from "components/WhatsAppIcon";

function Landing() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [rooms, setRooms] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const responsive2 = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 0 },
  //     items: 5,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  const images = [
    './images/client-logo-1.png',
    './images/client-logo-2.png',
    './images/client-logo-3.png',
    './images/client-logo-4.png',
    './images/client-logo-5.png',
  ];

  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleBookNowClick = () => {
    navigate("/booking");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  // Función para manejar el envío del formulario de búsqueda
  const handleSearch = (e) => {
    e.preventDefault();

    // Validar que el campo Destino esté lleno
    if (!destination.trim()) {
      alert("Por favor, ingresa un destino.");
      return;
    }

    // Opcional: Validar otros campos según necesidad
    // Por ejemplo, asegurarse de que las cantidades sean números válidos

    // Preparar los parámetros de búsqueda
    const searchParams = {
      destination: destination.trim(),
      rooms,
      adults,
      children,
    };

    // Navegar a /booking con los filtros como query parameters
    navigate(`/booking?${new URLSearchParams(searchParams).toString()}`);
  };

  return (
    <div className="home">
      {/* <div id="siteLoader" className="site-loader">
         <div className="preloader-content">
            <img src="./images/loader1.gif" alt="" />
         </div>
      </div> */}
      <div id="page" className="full-page">
        <Header />
        <main id="content" className="site-main" style={{ padding: "0px" }}>
          {/* <!-- Home slider html start brightstar --> */}
          <section
            className="home-slider-section"
            style={{ padding: "0px", position: "relative" }}
          >
            <div className="home-slider">
              <Carousel
                className="home-slider"
                responsive={responsive}
                showDots={true}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3500}
                dotListClass="custom-dot-list-style"
                slidesToSlide={1}
              >
                <div className="home-banner-items" style={{ backgroundSize: '100%', backgroundRepeat: "no-repeat", backgroundColor: "rgba(0,0,0,0.3)" }}>
                  <div
                    className="banner-inner-wrap"
                    style={{
                      backgroundImage: "url(./images/slider-1.png)",
                      backgroundSize: "cover !important",
                    }}
                  ></div>
                  <div className="banner-content-wrap">
                    <div className="container">
                      <div className="banner-content text-center">
                        <h2
                          className="banner-title"
                        >
                          Maximiza el potencial de tu propiedad con Gloove
                        </h2>
                        <p>
                          Nos encargamos de todo para que disfrutes
                          tranquilamente de tus beneficios y tengas tranquilidad
                          total
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="home-banner-items" style={{ backgroundSize: '100%', backgroundRepeat: "no-repeat", backgroundColor: "rgba(0,0,0,0.2)" }}>
                  <div
                    className="banner-inner-wrap"
                    style={{
                      backgroundImage: "url(./images/slider-2.PNG)",
                      backgroundSize: "cover !important",
                    }}
                  ></div>
                  <div className="banner-content-wrap">
                    <div className="container">
                      <div className="banner-content text-center">
                        <h2
                          className="banner-title"
                        >
                          Bienvenidos a nuestras viviendas
                        </h2>
                        <p>
                          ¡Disfruta de tus vacaciones con Gloove tu Alojamiento Turístico!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
              </Carousel>
              <div
                id="link-redes-sociales"
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  right: "0%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a href="https://www.facebook.com/profile.php?id=100090425376184" target="_blank">
                  <img
                    src="./images/happy (9).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="https://www.linkedin.com/company/gloove-gestor-turistico/?viewAsMember=true" target="_blank">
                  <img
                    src="./images/happy (6).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="https://www.instagram.com/gloove_me/" target="_blank">
                  <img
                    src="./images/happy (8).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
              </div>
            </div>
          </section>
          {/* <!-- slider html start --> */}
          {/* <!-- Home search field html start --> */}
          <div
            className="trip-search-section shape-search-section"
            style={{ padding: "0px" }}
          >
            <div className="slider-shape" style={{ marginTop: "-110px" }}></div>
            <div className="container">
              <div className="trip-search-inner white-bg d-flex">
                {/* Formulario de Búsqueda */}
                <form className="w-100" onSubmit={handleSearch}>
                  <div className="row">
                    {/* Destino */}
                    <div className="input-group col-md-3 mb-3 d-flex flex-column">
                      <label htmlFor="destination">Buscar destino*</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Destino"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                        className="form-control w-100"
                      />
                    </div>
                    {/* Número de Habitaciones */}
                    <div className="input-group col-md-3 mb-3 d-flex flex-column">
                      <label htmlFor="rooms">Nro. de habitaciones*</label>
                      <select
                        id="rooms"
                        name="rooms"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        required
                        className="form-control w-100"
                      >
                        <option value="">Seleccione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    {/* Cantidad de Adultos */}
                    <div className="input-group col-md-3 mb-3 d-flex flex-column">
                      <label htmlFor="adults">Cantidad de adultos*</label>
                      <select
                        id="adults"
                        name="adults"
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        required
                        className="form-control w-100"
                      >
                        <option value="">Seleccione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    {/* Cantidad de Niños */}
                    <div className="input-group col-md-3 mb-3 d-flex flex-column">
                      <label htmlFor="children">Cantidad de niños</label>
                      <select
                        id="children"
                        name="children"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        className="form-control w-100"
                      >
                        <option value="">Seleccione</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                  {/* Botón Buscar */}
                  <div className="input-group d-flex justify-content-center align-items-center">
                      <label className="screen-reader-text" htmlFor="search-button">
                        Buscar
                      </label>
                      <button
                        type="submit"
                        name="travel-search"
                        className="btn w-100"
                        style={{ fontSize: "14px", height: '56px', backgroundColor: '#156B7A', color: 'white' }}
                      >
                        Buscar
                      </button>
                    </div>
                  </div>
                </form>
                {/* Fin del Formulario */}
              </div>
            </div>
          </div>
          {/* <!-- Home search field html end --> */}
          {/* <!-- search search field html end --> */}
          <section className="destination-section">
            <div className="container">
              <div className="section-heading">
                <div className="row align-items-end">
                  <h3
                    className="dash-style"
                    style={{ fontSize: "28px", color: "#156B7A" }}
                  >
                    Nuestras viviendas vacacionales: Espacios únicos donde cada
                    casa cuenta una historia
                  </h3>
                  <div className="col-lg-7">
                    <h2>Nuestras mejores viviendas</h2>
                  </div>
                  <div className="col-lg-5" style={{ height: "100%" }}>
                    <div
                      className="section-disc"
                      style={{
                        textAlign: "center",
                        color: "black",
                        marginBottom: "20px",
                      }}
                    >
                      Consigue la máxima rentabilidad con la mínima interacción
                    </div>
                  </div>
                </div>
              </div>
              <div className="destination-inner destination-three-column">
                <div className="row">
                  <div className="col-lg-7" style={{ paddingTop: "10px" }}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/app (1).png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">VILLAJOYOSA</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#" style={{ color: "#FAFAFA" }}>
                                Paradise Home
                              </a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 4"
                            >
                              <span style={{ width: "53%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/app (2).png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">ARENALES DEL SOL</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#" style={{ color: "#FAFAFA" }}>
                                Arenales Beach House
                              </a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5" style={{ scale: "0.97" }}>
                    <div className="row">
                      <div className="col-md-6 col-xl-12">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/landscape (1).png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">GRAN ALACANT</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#" style={{ color: "#FAFAFA" }}>
                                Relaxing Sea Views
                              </a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-12">
                        <div className="desti-item overlay-desti-item">
                          <figure className="desti-image">
                            <img src="./images/landscape (2).png" alt="" />
                          </figure>
                          <div className="meta-cat bg-meta-cat">
                            <a href="#">VILLAJOYOSA</a>
                          </div>
                          <div className="desti-content">
                            <h3>
                              <a href="#" style={{ color: "#FAFAFA" }}>
                                Luxe Beach Three
                              </a>
                            </h3>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 4"
                            >
                              <span style={{ width: "60%" }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="btn-wrap text-center">
                  <a href="#" className="button-primary">
                    MORE DESTINATION
                  </a>
                </div> */}
              </div>
            </div>
          </section>
          {/* <!-- Home packages section html start --> */}
          {/* <section className="package-section">
            <div className="container">
              <div className="section-heading text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h5 className="dash-style">EXPLORE GREAT PLACES</h5>
                    <h2>POPULAR PACKAGES</h2>
                    <p>
                      Mollit voluptatem perspiciatis convallis elementum
                      corporis quo veritatis aliquid blandit, blandit torquent,
                      odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                      magnis maxime curae placeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="package-inner">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="./images/2.png" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$1,900 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock"></i>
                              7D/6N
                            </li>
                            <li>
                              <i className="fas fa-user-friends"></i>
                              People: 5
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              Malaysia
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Sunset view of beautiful lakeside resident
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(25 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "60%" }}></span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now<i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List<i className="far fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="./images/15.png" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$1,230 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock"></i>
                              5D/4N
                            </li>
                            <li>
                              <i className="fas fa-user-friends"></i>
                              People: 8
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              Canada
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Experience the natural beauty of island
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(17 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now<i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List<i className="far fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="./images/16.png" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$2,000 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock"></i>
                              6D/5N
                            </li>
                            <li>
                              <i className="fas fa-user-friends"></i>
                              People: 6
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              Portugal
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Vacation to the water city of Portugal
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(22 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "80%" }}></span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now<i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List<i className="far fa-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap text-center">
                  <a href="#" className="button-primary">
                    VIEW ALL PACKAGES
                  </a>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- packages html end --> */}
          {/* <!-- Home callback section html start --> */}
          <section className="callback-section" style={{ padding: "0px" }}>
            <div className="container">
              <div className="row no-gutters align-items-center">
                <div className="col-lg-5">
                  <div
                    className="callback-img"
                    style={{ backgroundImage: "url(./images/fly_12.jpg)" }}
                  >
                    <div className="video-button">
                      <a id="video-container" data-video-id="IUN664s7N-c">
                       <a href="https://www.youtube.com/watch?v=06PnWf5fp2A&t=2s" target="_blank">
                          <i className="fas fa-play"></i>                       
                       </a>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="callback-inner">
                    <div className="section-heading section-heading-white">
                      <h3 className="dash-style">
                        Maximizamos tu éxito y satisfacción
                      </h3>
                      <h2
                        id="behappy-text"
                        style={{
                          textAlign: "right",
                          paddingRight: "10%",
                          letterSpacing: "2px",
                          wordSpacing: "5px",
                        }}
                      >
                        BE HAPPY <br />
                        BE{" "}
                        <span
                          style={{
                            textShadow: "0 0px 20px rgba(255,255,255,1)",
                          }}
                        >
                          GLOOVE
                        </span>
                      </h2>
                      <p style={{ fontSize: "20px" }}>
                        Nuestros Servicios Estrella
                      </p>
                    </div>
                    <div className="callback-counter-wrap">
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (2).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">500</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                          >
                            Aperturas <br />
                            inteligentes
                          </span>
                        </div>
                      </div>
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (3).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">250</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                          >
                            Soporte Integral
                            <br /> 24/7
                          </span>
                        </div>
                      </div>
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (4).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">15</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                          >
                            Autogestión
                          </span>
                        </div>
                      </div>
                      <div className="counter-item">
                        <div className="counter-icon">
                          <img
                            src="./images/happy (5).png"
                            alt=""
                            style={{ scale: "1.3" }}
                          />
                        </div>
                        <div className="counter-content">
                          {/* <span className="counter-no">
                            <span className="counter">10</span>K+
                          </span> */}
                          <span
                            className="counter-text"
                          >
                            Optimización del
                            <br /> precio
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="support-area"
                      style={{
                        borderRadius: "80px",
                        backgroundColor: "#22AA22",
                        padding: "10px 50px",
                        // boxShadow: "0 0 20px 20px rgba(34, 170, 34, 1)"
                      }}
                    >
                      <div className="support-icon">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="whatsapp-icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            color: "white",
                            border: "2px solid white",
                            borderRadius: "50px",
                            padding: "10px",
                          }}
                        />
                        {/* <WhatsAppIcon /> */}
                      </div>
                      <div className="support-content">
                        {/* <h4>Our 24/7 Emergency Phone Services</h4> */}
                        <h3>
                          <a
                            href="https://api.whatsapp.com/message/WKHHAGYK4P4BB1?autoload=1&app_absent=0"
                            style={{
                              color: "white",
                              width: "fit-content",
                              fontWeight: "200",
                            }}
                          >
                            ¡Hablemos!
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- callback html end --> */}
          {/* <!-- Home activity section html start --> */}
          <section className="activity-section w-100" style={{ padding: "0px" }}>
            <div className="container" id="como-funcionamos-container">
              <div
                className="text-center"
                style={{ marginBottom: "50px", marginTop: '25px' }}
              >
              <h3 className="text-center">¿CÓMO FUNCIONAMOS?</h3>
              </div>
              <div
                className="activity-inner w-100"
                style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center', marginTop: "20px" }}
              >
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                        <img
                          src="./images/como_funcionamos_img1.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Una vez se firma el contrato, <br />
                        procedemos a la realización <br />
                        de las fotos y el pedido de la <br />
                        domótica
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                        <img
                          src="./images/como_funcionamos_img2.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Pasados unos dias, <br />
                        instalamos la domótica en la <br />
                        propiedad y ultimamos todo <br />
                        tipo de detalles
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                        <img
                          src="./images/como_funcionamos_img3.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Elaboramos y posteriormente <br />
                        publicamos los anuncios en <br />
                        todas las plataformas con las <br />
                        que trabajamos
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                        <img
                          src="./images/como_funcionamos_img4.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Comenzamos con el proceso <br />
                        comercial con todos los <br />
                        clientes interesados en la <br />
                        vivienda
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="" style={{ width: "fit-content" }}>
                  <div
                    className="activity-item"
                    style={{ border: "none", padding: "0px" }}
                  >
                    <div
                      className="activity-icon"
                      style={{ marginBottom: "40px" }}
                    >
                        <img
                          src="./images/como_funcionamos_img5.png"
                          alt=""
                          style={{ width: "200px" }}
                        />
                    </div>
                    <div className="activity-content">
                      <h5 style={{ color: "#156B7A" }}>
                        Pasados unos días la vivienda <br />
                        comienza a generar sus <br />
                        primeros ingresos
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <button
                  style={{
                    width: "fit-content",
                    margin: "auto",
                    padding: "30px 40px",
                    border: "0px",
                    borderRadius: "100px",
                    color: "white",
                    fontSize: "26px",
                    backgroundColor: "#156B7A",
                  }}
                >
                  <a href="https://api.whatsapp.com/message/WKHHAGYK4P4BB1?autoload=1&app_absent=0" target="_blank" style={{color: 'white'}}>
                  ¡Quiero saber más!
                  </a>
                </button>
              </div>
            </div>
          </section>
          {/* <!-- activity html end --> */}
          {/* <!-- Home special section html start --> */}

          <section
            className="subscribe-section"
            style={{
              backgroundImage: "url(./images/19.png)",
              backgroundSize: "cover",
              marginTop: "100px",
            }}
          >
            <div className="container">
              <div className="client-section">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Nuestros aliados estratégicos
                </h3>
                <div className="container">
                  <div
                    className="client-wrap client-slider secondary-bg"
                    style={{ backgroundColor: "initial" }}
                  >
                  {/* Carousel de aliados estratégicos */}
                  <Carousel
                        responsive={responsive2}
                        showDots={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        customTransition="all 0.5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                      >
                        {images.map((src, index) => (
                          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={src} alt={`Client logo ${index + 1}`} style={{ width: '100%', maxWidth: '200px' }} />
                          </div>
                        ))}
                      </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="special-section">
            <div className="container p-0">
              <div className="section-heading text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h3
                      className="dash-style"
                      style={{
                        color: "#156B7A",
                        width: "fit-content",
                        margin: "20px auto",
                      }}
                    >
                      Trabajamos de la mano de la tecnología más avanzada
                    </h3>
                    <h3 style={{ color: "black", wordSpacing: "5px" }}>
                      NUESTRAS TARIFAS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="special-inner flex items-center justify-center" style={{ marginTop: "10px" }}>
                <div
                  className="tarifas-container p-0"
                  style={{
                    height: "fit-content",
                    width: "90%",
                    margin: "0",
                    position: "relative",
                    left: "-10px"
                  }}
                >
                  <div className="col-md-6 col-lg-6 p-0">
                    <div
                      className="special-item"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <div
                        className="special-content"
                        style={{
                          backgroundColor: "#156B7A",
                          marginTop: "0px",
                          width: "fit-content",
                          position: "relative",
                          padding: "40px 40px",
                        }}
                      >
                        <div className="meta-cat">
                          {/* <a href="#">CANADA</a> */}
                        </div>
                        <h3>
                          <a href="#" style={{ color: "white" }}>
                            Gestión
                          </a>
                        </h3>
                        <div className="package-price">
                          <h3 className="tarifa-card-text" style={{ color: "white", fontWeight: "200" }}>
                            • Sesión fotográfica <br />
                            • Domotización de la Vivienda <br />
                            • Creación de anuncio <br />
                            • Publicación en diferentes plataformas <br />
                            • Gestión de reservas <br />
                            • Atención al huésped <br />
                            • Check-in/check-out <br />
                            • Call center 24H <br />• Gestión diaria de precios
                            <br />
                            <span
                              style={{
                                textShadow: "0 0px 10px rgba(255,255,255,1)",
                              }}
                            >
                              • Gestión de limpieza, lavandería y mantenimiento{" "}
                              <br />
                              • Amenities y Kits de Bienvenida
                              <br />
                            </span>
                          </h3>
                          {/* Price:
                          <del>$1500</del>
                          <ins>$1200</ins> */}
                        </div>
                        <div
                          className="badge-dis"
                          style={{
                            backgroundColor: "white",
                            border: "1px dashed #156B7A",
                            top: "-40px",
                            right: "-40px",
                          }}
                        >
                          <span>
                            <strong style={{ color: "#156B7A" }}>20%</strong>
                            {/* off */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 p-0">
                    <div
                      className="special-item"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <div
                        className="special-content"
                        style={{
                          backgroundColor: "#156B7A",
                          marginTop: "0px",
                          width: "fit-content",
                          position: "relative",
                          padding: "90px 40px",
                        }}
                      >
                        <h3>
                          <a href="#" style={{ color: "white" }}>
                            Gestión
                          </a>
                        </h3>
                        <div className="package-price">
                          <h3 className="tarifa-card-text" style={{ color: "white", fontWeight: "200" }}>
                            • Sesión fotográfica <br />
                            • Domotización de la Vivienda <br />
                            • Creación de anuncio <br />
                            • Publicación en diferentes plataformas <br />
                            • Gestión de reservas <br />
                            • Atención al huésped <br />
                            • Check-in/check-out <br />
                            • Call center 24H <br />• Gestión diaria de precios
                          </h3>
                        </div>
                        <div
                          className="badge-dis"
                          style={{
                            backgroundColor: "white",
                            border: "1px dashed #156B7A",
                            top: "-40px",
                            right: "-40px",
                          }}
                        >
                          <span>
                            <strong style={{ color: "#156B7A" }}>15%</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- special html end --> */}
          {/* <!-- Home special section html start --> */}
          {/* <section className="best-section">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="section-heading">
                    <h5
                      className="dash-style"
                      style={{ fontSize: "28px", color: "#156B7A" }}
                    >
                      OUR TOUR GALLERY
                    </h5>
                    <h2 style={{ fontSize: "44px" }}>
                      BEST TRAVELER'S
                      <br /> SHARED PHOTOS
                    </h2>
                    <p style={{ fontSize: "16px" }}>
                      Aperiam sociosqu urna praesent, tristique, corrupti
                      condimentum asperiores platea ipsum ad arcu. Nostrud.
                      Esse? Aut nostrum, ornare quas provident laoreet nesciunt
                      odio voluptates etiam, omnis.
                    </p>
                  </div>
                  <figure className="gallery-img" style={{ marginTop: "50px" }}>
                    <img src="./images/2.png" alt="" />
                  </figure>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-sm-6">
                      <figure className="gallery-img">
                        <img src="./images/16.png" alt="" />
                      </figure>
                    </div>
                    <div className="col-sm-6">
                      <figure className="gallery-img">
                        <img src="./images/18.png" alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <figure className="gallery-img">
                        <img src="./images/19.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- best html end --> */}
          {/* <!-- Home client section html start brightstar --> */}
          {/* <!-- subscribe html end --> */}
          {/* <!-- Home blog section html start --> */}
          {/* <section className="blog-section">
            <div className="container">
              <div className="section-heading text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h5 className="dash-style">FROM OUR BLOG</h5>
                    <h2>OUR RECENT POSTS</h2>
                    <p>
                      Mollit voluptatem perspiciatis convallis elementum
                      corporis quo veritatis aliquid blandit, blandit torquent,
                      odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                      magnis maxime curae placeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <figure className="feature-image">
                      <a href="#">
                        <img src="./images/12.png" alt="" />
                      </a>
                    </figure>
                    <div className="entry-content">
                      <h3>
                        <a href="#">
                          Life is a beautiful journey not a destination
                        </a>
                      </h3>
                      <div className="entry-meta">
                        <span className="byline">
                          <a href="#">Demoteam</a>
                        </span>
                        <span className="posted-on">
                          <a href="#">August 17, 2021</a>
                        </span>
                        <span className="comments-link">
                          <a href="#">No Comments</a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <figure className="feature-image">
                      <a href="#">
                        <img src="./images/15.png" alt="" />
                      </a>
                    </figure>
                    <div className="entry-content">
                      <h3>
                        <a href="#">
                          Take only memories, leave only footprints
                        </a>
                      </h3>
                      <div className="entry-meta">
                        <span className="byline">
                          <a href="#">Demoteam</a>
                        </span>
                        <span className="posted-on">
                          <a href="#">August 17, 2021</a>
                        </span>
                        <span className="comments-link">
                          <a href="#">No Comments</a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <figure className="feature-image">
                      <a href="#">
                        <img src="./images/16.png" alt="" />
                      </a>
                    </figure>
                    <div className="entry-content">
                      <h3>
                        <a href="#">
                          Journeys are best measured in new friends
                        </a>
                      </h3>
                      <div className="entry-meta">
                        <span className="byline">
                          <a href="#">Demoteam</a>
                        </span>
                        <span className="posted-on">
                          <a href="#">August 17, 2021</a>
                        </span>
                        <span className="comments-link">
                          <a href="#">No Comments</a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- blog html end --> */}
          {/* <!-- Home testimonial section html start brightstar --> */}
          <div
            className="testimonial-section"
            style={{
              // backgroundImage: "url(./images/img23.jpg)",
              paddingTop: "50px",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="testimonial-inner testimonial-slider">
                    <Carousel
                      className="home-slider"
                      responsive={responsive}
                      showDots={true}
                      infinite={true}
                      autoPlay={false}
                      arrows={false}
                      autoPlaySpeed={3500}
                      dotListClass="custom-dot-list-style"
                      slidesToSlide={1}
                    >
                      <div className="testimonial-item text-center">
                        <figure className="testimonial-img">
                          <img src="./images/1.jpg" alt="" />
                        </figure>
                        <div className="testimonial-content">
                          <p>
                            " Por primera vez conseguí aumentar
                            considerablemente la rentabilidad de mi vivienda en
                            Villajoyosa. Cuando las cosas se hacen bien, se
                            nota… "
                          </p>
                          <cite style={{ fontStyle: "normal" }}>
                            Amadeo Cortell
                            <span
                              className="company"
                              style={{ color: "black", fontStyle: "normal" }}
                            >
                              Travel Agent
                            </span>
                          </cite>
                        </div>
                      </div>
                      <div className="testimonial-item text-center">
                        <figure className="testimonial-img">
                          <img src="./images/2.jpg" alt="" />
                        </figure>
                        <div className="testimonial-content">
                          <p>
                            " Sin duda la tecnología es el factor más
                            diferenciador de este gestor. De empresaria a
                            empresarios doy mi más sincera enhorabuena. "
                          </p>
                          <cite style={{ fontStyle: "normal" }}>
                            Elvira Cañamero
                            <span
                              className="company"
                              style={{ color: "black", fontStyle: "normal" }}
                            >
                              Travel Agent
                            </span>
                          </cite>
                        </div>
                      </div>
                      <div className="testimonial-item text-center">
                        <figure className="testimonial-img">
                          <img src="./images/3.jpg" alt="" />
                        </figure>
                        <div className="testimonial-content">
                          <p>
                            " Maravillosa experiencia. Muy atento y cercano todo
                            el equipo. Los recomiendo "
                          </p>
                          <cite>
                            Santiago Esparza
                            <span className="company">Travel Guide</span>
                          </cite>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- testimonial html end --> */}
          {/* <!-- Home contact details section html start --> */}
          {/* <section className="contact-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="contact-img"
                    style={{
                      backgroundImage: "url(./images/logogloove.png)",
                    }}
                  ></div>
                </div>
                <div className="col-lg-8">
                  <div className="contact-details-wrap">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="contact-details">
                          <div className="contact-icon">
                            <img src="./images/icon12.png" alt="" />
                          </div>
                          <ul>
                            <li>
                              <a href="#">support@gmail.com</a>
                            </li>
                            <li>
                              <a href="#">info@domain.com</a>
                            </li>
                            <li>
                              <a href="#">name@company.com</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="contact-details">
                          <div className="contact-icon">
                            <img src="./images/icon13.png" alt="" />
                          </div>
                          <ul>
                            <li>
                              <a href="#">+132 (599) 254 669</a>
                            </li>
                            <li>
                              <a href="#">+123 (669) 255 587</a>
                            </li>
                            <li>
                              <a href="#">+01 (977) 2599 12</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="contact-details">
                          <div className="contact-icon">
                            <img src="./images/icon14.png" alt="" />
                          </div>
                          <ul>
                            <li>3146 Koontz, California</li>
                            <li>Quze.24 Second floor</li>
                            <li>36 Street, Melbourne</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-btn-wrap">
                    <h3>LET'S JOIN US FOR MORE UPDATE !!</h3>
                    <a href="#" className="button-primary">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!--  contact details html end --> */}
        </main>
        <Footer />
        <a id="backTotop" href="#" className="to-top-icon">
          <i className="fas fa-chevron-up"></i>
        </a>
        {/* <!-- custom search field html --> */}
        <div className="header-search-form">
          <div className="container">
            <div className="header-search-container">
              <form className="search-form" role="search" method="get">
                <input type="text" name="s" placeholder="Enter your text..." />
              </form>
              <a href="#" className="search-close">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- header html end --> */}
      </div>

      {/* <!-- JavaScript -->
      <script src="assets/js/jquery.js"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
      <script src="assets/vendors/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/vendors/jquery-ui/jquery-ui.min.js"></script>
      <script src="assets/vendors/countdown-date-loop-counter/loopcounter.js"></script>
      <script src="assets/js/jquery.counterup.js"></script>
      <script src="assets/vendors/modal-video/jquery-modal-video.min.js"></script>
      <script src="assets/vendors/masonry/masonry.pkgd.min.js"></script>
      <script src="assets/vendors/lightbox/dist/js/lightbox.min.js"></script>
      <script src="assets/vendors/slick/slick.min.js"></script>
      <script src="assets/js/jquery.slicknav.js"></script>
  <script src="assets/js/custom.min.js"></script> */}
    </div>
  );
}

export default Landing;
