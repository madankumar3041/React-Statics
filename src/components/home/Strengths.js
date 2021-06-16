import React from 'react';
import engineeringDept from '../../assets/engineeringDept.png';
import equippedLab from '../../assets/equippedLab.png';
import qualifiedStaf from '../../assets/qualifiedStaf.png';
import { Row, Col } from 'react-bootstrap';
const Strengths = () => {
  return (
    <div className='strengths py-5'>
      <div className='container'>
        <h2>Our Strengths</h2>
        <hr />
        <Row>
          <Col md={4}>
            <div className='cards'>
              <img src={qualifiedStaf} alt='qualified staff' />
              <h4>Qualified staff</h4>
            </div>
          </Col>
          <Col md={4}>
            <div className='cards'>
              <img src={equippedLab} alt='equipped lab' />
              <h4>Fully Equipped Lab</h4>
            </div>
          </Col>
          <Col md={4}>
            <div className='cards'>
              <img src={engineeringDept} alt='engineering dept' />
              <h4>In-House Engineering Dept</h4>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Strengths;
