import React from 'react';
import Layout from '../admin/components/Layout';
import { Route, Routes } from 'react-router-dom';
import TestimonialsAdmin from '../admin/containers/testimonial/TestimonialsAdmin';
import BlogAdmin from '../admin/containers/BlogAdmin';
import PricingAdmin from '../admin/containers/pricing/PricingAdmin';
import ServicesAdmin from '../admin/containers/ServicesAdmin';



function AdminRoutes(props) {
 
    return (
      
        <>
       
            <Layout>
                <Routes>
                    <Route path='/TestimonialsAdmin' element={ <TestimonialsAdmin />} />
                    <Route path='/BlogAdmin' element={ <BlogAdmin />} />
                    <Route path='/PricingAdmin' element={ <PricingAdmin />} />
                    <Route path='/ServicesAdmin' element={ <ServicesAdmin />} />
                </Routes>
            </Layout>
       
        </>
    );
}

export default AdminRoutes;