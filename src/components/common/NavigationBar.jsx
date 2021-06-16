import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import homeIcon from '../../assets/homeIcon.png';
import aboutUsIcon from '../../assets/aboutUsIcon.png';
import servicesIcon from '../../assets/servicesIcon.png';
import showCaseIcon from '../../assets/homeIcon.png';
import contactIcon from '../../assets/contactIcon.png';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <div>
      <Navbar sticky='top' bg='white' expand='lg' className='container'>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt='logo' className='img-fluid logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              <img src={homeIcon} alt='home' className='icon' /> Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              <img src={aboutUsIcon} alt='home' className='icon' />
              Our Company
            </Nav.Link>
            <Nav.Link as={Link} to='/process'>
              <img src={servicesIcon} alt='home' className='icon' />
              Processes
            </Nav.Link>
            <Nav.Link as={Link} to='/facilities'>
              <img src={showCaseIcon} alt='home' className='icon' />
              Facilities
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              <img src={contactIcon} alt='home' className='icon' />
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
