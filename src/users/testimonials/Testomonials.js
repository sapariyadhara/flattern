import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListPartners from "./ListPartners";

function Testomonials(props) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);
    if (localData) {
      setData(localData);
    }
  }, []);

  const handleChange = (val) => {
    let localData = JSON.parse(localStorage.getItem("testimonial"));
    console.log(localData);

    let newData = localData.filter(
      (v) =>
        v.name.toLowerCase().includes(val.toLowerCase()) ||
        v.designation.toLowerCase().includes(val.toLowerCase()) ||
        v.desc.toLowerCase().includes(val.toLowerCase())
    );
    setFilterData(newData);
  };
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Testimonials</h2>
            <ol>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Testimonials</li>
            </ol>
          </div>
        </div>
      </section>
      <div
            class="input-group"
            style={{ width: "600px", margin: " 20px auto" }}
          >
            <input
              type="search"
              name="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => handleChange(e.target.value)}
            />
            <button type="button" class="btn btn-outline-primary">
              search
            </button>
          </div>
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="row gap-3" >
            <ListPartners tmData={filterData.length > 0 ? filterData : data} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testomonials;
