import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>About</h2>
              <ol>
                <li>
                <Link to={'/'}>Home</Link>
                </li>
                <li>About</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* ======= About Us Section ======= */}
        <section id="about-us" className="about-us">
          <div className="container">
            <div className="row no-gutters">
              <div
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
                data-aos="fade-right"
              />
              <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h3 data-aos="fade-up">
                    Voluptatem dignissimos provident quasi
                  </h3>
                  <p data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                  <div className="row">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="bx bx-receipt" />
                      <h4>Corporis voluptates sit</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <i className="bx bx-cube-alt" />
                      <h4>Ullamco laboris nisi</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <i className="bx bx-images" />
                      <h4>Labore consequatur</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="bx bx-shield" />
                      <h4>Beatae veritatis</h4>
                      <p>
                        Expedita veritatis consequuntur nihil tempore laudantium
                        vitae denat pacta
                      </p>
                    </div>
                  </div>
                </div>
                {/* End .content*/}
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Our Team Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                Our <strong>Team</strong>
              </h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={300}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Our Team Section */}
        {/* ======= Our Skills Section ======= */}
        <section id="skills" className="skills">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                Our <strong>Skills</strong>
              </h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    WordPress/CMS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Photoshop <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Our Skills Section */}
        {/* ======= Our Clients Section ======= */}
        <section id="clients" className="clients">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                Our <strong>Clients</strong>
              </h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div
              className="row no-gutters clients-wrap clearfix"
              data-aos="fade-up"
            >
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
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
    </>
  );
}

export default About;
