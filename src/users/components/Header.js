import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div>
        {/* ======= Top Bar ======= */}
        <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@example.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </section>
        {/* ======= Header ======= */}
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between">
            <div className="logo">
              <h1 className="text-light">
                <a href="index.html">Flattern</a>
              </h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <Link className="active" to={'/'}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/services'}>Services</Link>
                </li>
                <li>
                  <Link to={'/testimonials'}>Testimonials</Link>
                </li>
                <li>
                  <Link to={'/pricing'}>Pricing</Link>
                </li>
                <li>
                  <Link to={'/portfolio'}>Portfolio</Link>
                </li>
                <li>
                  <Link to={'/blog'}>Blog</Link>
                </li>
                <li className="dropdown">
                  <Link href="#">
                    <span>Drop Down</span> <i className="bi bi-chevron-down" />
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Drop Down 1</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="#">
                        <span>Deep Drop Down</span>{" "}
                        <i className="bi bi-chevron-right" />
                      </Link>
                      <ul>
                        <li>
                          <Link href="#">Deep Drop Down 1</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 2</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 3</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 4</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 5</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">Drop Down 2</Link>
                    </li>
                    <li>
                      <Link href="#">Drop Down 3</Link>
                    </li>
                    <li>
                      <Link href="#">Drop Down 4</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
          </div>
        </header>
        {/* End Header */}
      </div>
    </>
  );
}

export default Header;
