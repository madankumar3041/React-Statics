import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
const Info = () => {
  return (
    <div className='container my-5'>
      <Row>
        <Col md={6} lg={4}>
          <Card style={{ width: '20rem' }} className='mx-auto mb-3 h-100'>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1534126511673-b6899657816a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dGlsZSUyMG1hY2hpbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Manufacturing Capabilities</Card.Title>
              <Card.Text>
                Shree Jagdamba Textiles Pvt Ltd has dyeing & finishing
                capabilities with the finest machines having advanced
                technologies offering strict quality control at every step of
                the manufacturing cycle. Our adaptable approach enables us to
                rapidly react to change in market interest by having the option
                to deliver unmistakable plans in short turnaround times.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: '20rem' }} className='mx-auto mb-3 h-100'>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1574689049868-e94ed5301745?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbGl0eSUyMGNvbnRyb2x8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Quality Control</Card.Title>
              <Card.Text>
                Quality control has been a major point of concern since the
                start. We have fully equipped laboratories with essential
                technologies that maintain high standards of quality. Every
                shipment that leaves the factory is double-checked for any
                human/mechanical errors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4}>
          <Card
            style={{ width: '20rem' }}
            className='mx-auto mb-3 mb-md-0 h-100'
          >
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1533808235766-376cdc7e7661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VzdGFpbmFiaWxpdHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Sustainability</Card.Title>
              <Card.Text>
                The beauty of nature cannot be taken for granted. We should not
                endanger and upset the delicate ecological balance that makes
                life possible on Earth. Our sustainable approach is visible in
                the way we commit to the processes ranging from utilizing raw
                material to manufacturing our products. We have pledged to join
                the sustainable drive by using eco-friendly procedures.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
