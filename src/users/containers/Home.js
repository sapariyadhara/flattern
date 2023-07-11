import React from "react";
import { A, Box, H4, I, IconD } from "../components/Ui/IconBox/IconBoxC.style";
import {  An, H2 , P } from "../components/Ui/Haddings/Hadding.style";
import Image from "../components/Ui/Image/Image";

function Home(props) {
  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero">
          <div
            id="heroCarousel"
            data-bs-interval={5000}
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              {/* Slide 1 */}
              <div
                className="carousel-item active"
                style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <H2>
                      Welcome to <span>Flattern</span>
                    </H2>
                    <P>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </P>
                    <div className="text-center">
                      <An href className="btn-get-started">
                        Read More
                      </An>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div
                className="carousel-item"
                style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <H2>Lorem Ipsum Dolor</H2>
                    <P>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </P>
                    <div className="text-center">
                      <An href className="btn-get-started">
                        Read More
                      </An>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div
                className="carousel-item"
                style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <H2>Sequi ea ut et est quaerat</H2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div className="text-center">
                      <A href className="btn-get-started">
                        Read More
                      </A>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bx bx-left-arrow"
                aria-hidden="true"
              />
            </a>
            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bx bx-right-arrow"
                aria-hidden="true"
              />
            </a>
            <ol className="carousel-indicators" id="hero-carousel-indicators" />
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= Cta Section ======= */}
          <section id="cta" className="cta">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-left">
                  <h3>
                    We've created more than <span>200 websites</span> this year!
                  </h3>
                  <p>
                    {" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <An  href="#">
                    Request a quote
                  </An>
                </div>
              </div>
            </div>
          </section>
          {/* End Cta Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <Box>
                    <IconD className="icon">
                      <I className="bi bi-briefcase" />
                    </IconD>
                    <H4 className="title">
                      <A href>Lorem Ipsum</A>
                    </H4>
                    <P className="description">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </P>
                  </Box>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Box>
                    <IconD>
                      <I className="bi bi-card-checklist" />
                    </IconD>
                    <H4 className="title">
                      <A href>Dolor Sitema</A>
                    </H4>
                    <P className="description">
                      Minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat tarad limino ata
                    </P>
                  </Box>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Box>
                    <IconD>
                      <I className="bi bi-bar-chart" />
                    </IconD>
                    <H4 className="title">
                      <A href>Sed ut perspiciatis</A>
                    </H4>
                    <P className="description">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </P>
                  </Box>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Box>
                    <IconD>
                      <I className="bi bi-binoculars" />
                    </IconD>
                    <H4 className="title">
                      <A href>Magni Dolores</A>
                    </H4>
                    <P className="description">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </P>
                  </Box>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Box>
                    <IconD >
                      <I className="bi bi-brightness-high" />
                    </IconD>
                    <H4 className="title">
                      <A href>Nemo Enim</A>
                    </H4>
                    <P className="description">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </P>
                  </Box>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Box>
                    <IconD>
                      <I className="bi bi-calendar4-week" />
                    </IconD>
                    <H4 className="title">
                      <A href>Eiusmod Tempor</A>
                    </H4>
                    <P className="description">
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi
                    </P>
                  </Box>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container" data-aos="fade-up">
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="App 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="Card 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="Web 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="App 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="Card 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="Card 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Portfolio Section */}
          {/* ======= Our Clients Section ======= */}
          <section id="clients" className="clients">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <H2>
                  Our <strong>Clients</strong>
                </H2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div
                className="row no-gutters clients-wrap clearfix"
                data-aos="fade-up"
              >
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-1.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-2.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-3.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-4.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-5.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-6.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-7.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo">
                    <Image
                      src="assets/img/clients/client-8.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Our Clients Section */}
        </main>
        {/* End #main */}
      </div>
    </>
  );
}

export default Home;
