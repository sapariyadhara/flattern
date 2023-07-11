import { Tune } from "@mui/icons-material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import Input from "../components/Ui/Input/Input";
import Button from "../components/Ui/Button/Button";

function Contact(props) {

  const contactSchema = Yup.object({
    name: Yup.string().max(25).min(2).matches(/^[a-z]+$/, 'Please enter valid name').required(),
    email: Yup.string().email().required(),
    subject: Yup.string().required(),
    message: Yup.string().test('message', 'Please Enter Max 100 Words.', function (val) {
      let arr = val.split(" ")
      if (arr.length > 5) {
        return false
      } else {
        return true
      }

    }).required(),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: contactSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      action.resetForm()
      console.log(values);
    }
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Contact</h2>
              <ol>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* ======= Contact Section ======= */}
        <div className="map-section">
          <iframe
            style={{ border: 0, width: "100%", height: 350 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder={0}
            allowFullScreen
          />
        </div>
        <section id="contact" className="contact">
          <div className="container">
            <div className="row justify-content-center" data-aos="fade-up">
              <div className="col-lg-10">
                <div className="info-wrap">
                  <div className="row">
                    <div className="col-lg-4 info">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>
                        A108 Adam Street
                        <br />
                        New York, NY 535022
                      </p>
                    </div>
                    <div className="col-lg-4 info mt-4 mt-lg-0">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p>
                        info@example.com
                        <br />
                        contact@example.com
                      </p>
                    </div>
                    <div className="col-lg-4 info mt-4 mt-lg-0">
                      <i className="bi bi-phone" />
                      <h4>Call:</h4>
                      <p>
                        +1 5589 55488 51
                        <br />
                        +1 5589 22475 14
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-center" data-aos="fade-up">
              <div className="col-lg-10">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <Input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        ErrorT={errors.name && touched.name ? errors.name : null}
                      />
                      <span style={{ color: 'red' }}></span>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <Input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        ErrorT={errors.email && touched.email ? errors.email : null}
                      />
            
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <Input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      ErrorT={errors.subject && touched.subject ? errors.subject : null}
                    />
                 
                  </div>
                  <div className="form-group mt-3">
                    <Input
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      ErrorT={errors.message && touched.message ? errors.message : null}
                    />
                  
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <Button>Submit</Button>
                    {/* <button type="submit">Submit</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
    </>
  );
}

export default Contact;
