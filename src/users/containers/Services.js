import React from "react";
import { Link } from "react-router-dom";

function Services(props) {
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Services</h2>
              <ol>
                <li>
                <Link to={'/'}>Home</Link>                </li>
                <li>Services</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="icon-box" data-aos="fade-up">
                  <div className="icon">
                    <i className="bi bi-briefcase" />
                  </div>
                  <h4 className="title">
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <i className="bi bi-card-checklist" />
                  </div>
                  <h4 className="title">
                    <a href>Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <i className="bi bi-bar-chart" />
                  </div>
                  <h4 className="title">
                    <a href>Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <i className="bi bi-binoculars" />
                  </div>
                  <h4 className="title">
                    <a href>Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon">
                    <i className="bi bi-brightness-high" />
                  </div>
                  <h4 className="title">
                    <a href>Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="icon">
                    <i className="bi bi-calendar4-week" />
                  </div>
                  <h4 className="title">
                    <a href>Eiusmod Tempor</a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                Some <strong>Features</strong> we do provide
              </h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      <h4>Modi sit est</h4>
                      <p>
                        Quis excepturi porro totam sint earum quo nulla
                        perspiciatis eius.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                      <h4>Unde praesentium sed</h4>
                      <p>Voluptas vel esse repudiandae quo excepturi.</p>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                      <h4>Pariatur explicabo vel</h4>
                      <p>
                        Velit veniam ipsa sit nihil blanditiis mollitia natus.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                      <h4>Nostrum qui quasi</h4>
                      <p>
                        Ratione hic sapiente nostrum doloremque illum nulla
                        praesentium id
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-7 ml-auto"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <figure>
                      <img
                        src="assets/img/features-1.png"
                        alt
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <figure>
                      <img
                        src="assets/img/features-2.png"
                        alt
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <figure>
                      <img
                        src="assets/img/features-3.png"
                        alt
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <figure>
                      <img
                        src="assets/img/features-4.png"
                        alt
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}
      </main>
      {/* End #main */}
    </>
  );
}

export default Services;
