import React from 'react';
import AboutUs from '../home/AboutUs';
import Footer from '../common/Footer';
import Info from '../home/Info';
import Banner from '../common/Banner';
const About = () => {
  return (
    <div className='about-page'>
      <Banner
        image='https://images.unsplash.com/photo-1611007724986-ddc029dd74d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        text='Our Company'
      />
      {/* <div className='team container py-5'>
        <h2>Our Team</h2>
        <hr />
        <Row>
          <Col lg={3}>
            <img
              src='https://images.unsplash.com/photo-1564490215983-296e5f56b623?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbWFufGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='team member'
              className='img-fluid my-3'
            />
          </Col>
          <Col lg={3}>
            <img
              src='https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwbWFufGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='team member'
              className='img-fluid my-3'
            />
          </Col>
          <Col lg={3}>
            <img
              src='https://images.unsplash.com/photo-1549045337-967927d923c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwbWFufGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='team member'
              className='img-fluid my-3'
            />
          </Col>
          <Col lg={3}>
            <img
              src='https://images.unsplash.com/flagged/photo-1572523339950-9b8f67b8fac0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWFufGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='team member'
              className='img-fluid my-3'
            />
          </Col>
        </Row>
      </div> */}
      <AboutUs />
      <Info />

      <Footer />
    </div>
  );
};

export default About;
