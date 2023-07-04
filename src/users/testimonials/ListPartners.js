import React from 'react';
import CustomCard from '../components/Ui/CustomCard';

function ListPartners({tmData}) {
    return (
        <>
           
                {
                    tmData.map((v , i) => {
                        return(
                            <div className="col-lg-5" data-aos="fade-up">
                                <CustomCard value={v} />
                            </div>
                        )
                    })
                }
          
        </>
    );
}

export default ListPartners;