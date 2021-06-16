import React from 'react';
import logo from '../../assets/logo.png';
import call from '../../assets/call.png';
import email from '../../assets/email.png';
import address from '../../assets/address.png';
import { Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className='mt-3'>
      <div className='container'>
        <Row>
          <Col md={4}>
            <div className='copyrights'>
              <img src={logo} alt='logo' />
              <h4>Shree Jagdamba Textiles Pvt Ltd.</h4>
              <p>All copy rights reserved 2021</p>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={2}>
            <div className='links my-3 my-md-0'>
              <h4>Links</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Others</li>
              </ul>
            </div>
          </Col>
          <Col md={1}></Col>

          <Col md={4}>
            <h4 className='mt-3 mt-md-0'>Contact Us</h4>
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
                mailto:sjtpl@jagdambatextiles.com
              </li>
            </ul>
          </Col>
          {/* <Col md={3}>
            <h4>Unit Address</h4>
            <ul>
              <li>
                <img src={address} alt='address' />
                704/10 Sir Chinubhai Building,Near Maskati Market,Ahmedabad –
                380002
              </li>
              <li>
                <img src={call} alt='address' />
                +91-79-22137416{' '}
              </li>
              <li>
                <img src={email} alt='address' />
                mailto:sjtpl@jagdambatextiles.com
              </li>
            </ul>
          </Col> */}
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
