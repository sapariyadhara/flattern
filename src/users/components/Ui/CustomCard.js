import React from 'react';

function CustomCard({value}) {
    return (
        <>
            <div className="testimonial-item">
                  <img
                    src={value.img}
                    className="testimonial-img"
                    alt
                  />
                  {/* {value.img} */}
                  <h3>{value.name}</h3>
                  <h4>{value.designation}</h4>
                  <p>
                   {value.desc}
                  </p>
                </div>
        </>
    );
}

export default CustomCard;