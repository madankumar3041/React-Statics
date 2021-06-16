import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import missionImage from '../../assets/mission.png';
// import valuesImage from '../../assets/values.png';
const Intro = () => {
  return (
    <div className='intro container py-5'>
      <Row>
        <Col md={6}>
          <div
            className='w-100 h-100 image'
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 59%, rgba(0, 0, 0, 0.25) 100%),url('https://images.unsplash.com/photo-1562869929-bda0650edb1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
            }}
          ></div>
        </Col>
        <Col md={6}>
          <div className='content'>
            <p className='mt-4 mt-md-0'>
              Welcome to Shree Jagdamba Textiles Pvt Ltd. In today’s world it is
              particularly important to be pragmatic & focused on any
              progressive approach. Our vision is to initiate cohesive and
              diversified processes to reach unparalleled heights with grit &
              hard work.
            </p>
            <h4>
              Mission
              {/* <img src={missionImage} alt='mission' className='icon' /> */}
            </h4>
            <hr />
            <p>
              To supply quality fabric results & services through efficiency &
              commitment to garment manufacturers, designers & to other textile
              manufacturers.
            </p>
            <h4>
              Values
              {/* <img src={valuesImage} alt='values' className='icon' /> */}
            </h4>
            <hr />
            <p>
              We believe in getting better each day. With our qualified &
              experienced team, we set high targets for consistent production,
              timely shipment and most importantly customer satisfaction.
              Transparency, Honesty & Commitment are some of our core values to
              build healthy & lasting relations with our customers.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
