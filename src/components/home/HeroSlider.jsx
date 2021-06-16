import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HeroSlider = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div
          className='slide-item'
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 59%, rgba(0, 0, 0, 0.85) 100%),url('https://images.unsplash.com/photo-1613076321656-23dcdd3aea92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
          }}
        >
          <div className='header'>
            <h1>
              Manufacturers of Hosiery & Woven fabrics{' '}
              <br className='d-none d-md-block' /> with Rotary Printing
            </h1>
            <p>
              Our vision is to initiate cohesive and diversified processes to
              reach unparalleled heights with grit & hard work
            </p>
            <Link to='/contact'>
              <Button variant='light' className='mb-3'>
                Contact Now
              </Button>
            </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className='slide-item'
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 59%, rgba(0, 0, 0, 0.85) 100%),url('https://images.unsplash.com/photo-1563837738662-c86ef2ba99f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
          }}
        >
          <div className='header'>
            <h1>
              Manufacturers of Hosiery & Woven fabrics{' '}
              <br className='d-none d-md-block' /> with Rotary Printing
            </h1>
            <p>
              Our vision is to initiate cohesive and diversified processes to
              reach unparalleled heights with grit & hard work
            </p>
            <Link to='/contact'>
              <Button variant='light' className='mb-3'>
                Contact Now
              </Button>
            </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className='slide-item'
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 59%, rgba(0, 0, 0, 0.85) 100%),url('https://images.unsplash.com/photo-1615806528302-05c722d51e0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
          }}
        >
          <div className='header'>
            <h1>
              Manufacturers of Hosiery & Woven fabrics{' '}
              <br className='d-none d-md-block' /> with Rotary Printing
            </h1>
            <p>
              Our vision is to initiate cohesive and diversified processes to
              reach unparalleled heights with grit & hard work
            </p>
            <Link to='/contact'>
              <Button variant='light' className='mb-3'>
                Contact Now
              </Button>
            </Link>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSlider;
