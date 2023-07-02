import React from "react";
import { Link } from "react-router-dom";

function Pricing(props) {
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Pricing</h2>
              <ol>
                <li>
                <Link to={'/'}>Home</Link>
                </li>
                <li>Pricing</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* ======= Pricing Section ======= */}
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="box" data-aos="fade-right">
                  <h3>Free</h3>
                  <h4>
                    <sup>$</sup>0<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className="na">Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="box featured" data-aos="fade-up">
                  <h3>Business</h3>
                  <h4>
                    <sup>$</sup>19<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="box" data-aos="fade-left">
                  <h3>Developer</h3>
                  <h4>
                    <sup>$</sup>29<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Pricing Section */}
        {/* ======= Cta Pricing Section ======= */}
        <section id="cta-pricing" className="cta-pricing">
          <div className="container">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className="cta-btn" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </section>
        {/* End Cta Pricing Section */}
      </main>
      {/* End #main */}
    </>
  );
}

export default Pricing;
