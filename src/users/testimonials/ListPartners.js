import React from 'react';
import CustomCard from '../components/Ui/CustomCard';

function ListPartners({tmData}) {
    return (
        <div>
           
                {
                    tmData.map((v , i) => {
                        return(
                            <div className="col-lg-6" data-aos="fade-up">
                                <CustomCard value={v} />
                            </div>
                        )
                    })
                }
          
        </div>
    );
}

export default ListPartners;