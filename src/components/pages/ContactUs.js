import React from 'react';
import Banner from '../common/Banner';
import JotformEmbed from 'react-jotform-embed';
import { Row, Col } from 'react-bootstrap';
import call from '../../assets/call.png';
import email from '../../assets/email.png';
import address from '../../assets/address.png';
import Footer from '../common/Footer';
const ContactUs = () => {
  return (
    <div className='contact-us'>
      <Banner
        text='Contact Us'
        image='https://images.unsplash.com/photo-1611007724986-ddc029dd74d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      />
      <div className='container py-5'>
        <Row className='address'>
          <Col md={6}>
            <h4>Office Address</h4>
            <ul>
              <li>
                <img src={address} alt='address' /> 704/10 Sir Chinubhai
                Building,Near Maskati Market,Ahmedabad – 380002
              </li>
              <li>
                <img src={call} alt='address' />
                +91-79-22137416
              </li>
              <li>
                <img src={email} alt='address' />
                sjtpl@jagdambatextiles.com
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h4>UNIT Address</h4>
            <ul>
              <li>
                <img src={address} alt='address' /> 188/1, Opp Ranipur
                Church,Opp Cozy hotel lane,Narol-Sarkhej bypass, Narol,Ahmedabad
                - 382405
              </li>
              <li>
                <img src={call} alt='address' />
                +91-79-25731104
              </li>
              <li>
                <img src={email} alt='address' />
                general@jagdambatextiles.com
              </li>
            </ul>
          </Col>
        </Row>
        <div className='form-area'>
          <JotformEmbed src='https://form.jotform.com/211642995718062' />
          <div className='hider'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
