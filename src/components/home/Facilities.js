import React from 'react';
import { Row, Col } from 'react-bootstrap';
import data from '../../Data/MachinaryFacilities';
const Facilities = () => {
  return (
    <div className='facilities container py-5 mt-0 mt-md-3'>
      <h2>Our Facilities</h2>
      <hr />
      <div className='card-container'>
        {data.map((value, index) => {
          return (
            <div>
              <h3>{value.title}</h3>
              <Row key={index}>
                {value.machines.map((mvalue, mindex) => {
                  return (
                    <Col sm={6} md={4} lg={3} key={mindex}>
                      <div className='cards my-3'>
                        <div
                          className='image'
                          style={{
                            backgroundImage: `url('${mvalue.image}')`,
                          }}
                        ></div>
                        <p>{mvalue.name}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
