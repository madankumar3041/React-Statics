import React from 'react';
import Banner from '../common/Banner';
import Footer from '../common/Footer';
import Facilities from '../home/Facilities';
const FacilitiesPage = () => {
  return (
    <div>
      <Banner
        image='https://images.unsplash.com/photo-1611007724986-ddc029dd74d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        text='Facilities'
      />
      <Facilities />
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
