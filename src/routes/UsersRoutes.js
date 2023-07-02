import React from "react";
import Header from "../users/components/Header";
import Footer from "../users/components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../users/containers/Home";
import About from "../users/containers/About";
import Services from "../users/containers/Services";
import Pricing from "../users/containers/Pricing";
import Testimonials from "../users/containers/Testimonials";
import Contact from "../users/containers/Contact";
import Portfolio from "../users/containers/Portfolio";
import Blog from "../users/containers/Blog";

function UsersRoutes(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UsersRoutes;
