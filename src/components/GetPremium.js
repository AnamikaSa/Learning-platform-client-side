import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../images/O1.png';
import img2 from '../images/O2.jpg';
import img3 from '../images/O3.jpg'
const GetPremium = () => {
  return (
    <CardGroup className='gap-3 mt-5'>
      <Card className='mt-5 p-2'>
        <Card.Img variant="top" className='w-100' src={img1} />
        <Card.Body>
          <Card.Title>Regular Courses</Card.Title>
          <Card.Text>
            With regular basis classes will be held.
            <br />
            <span className='text-info fw-semibold'>Price:100$ only</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Contact Now: +01xxxxxxx</small>
        </Card.Footer>
      </Card>
      <Card className='mt-5 p-2'>
        <Card.Img variant="top" className='w-100' src={img2} />
        <Card.Body>
          <Card.Title>Intermediate Level</Card.Title>
          <Card.Text>
          Courses will be one-to-one with care.
            <br />
            <span className='text-info fw-semibold'>Price:300$ only</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Contact Now: +01xxxxxxx</small>
        </Card.Footer>
      </Card>
      <Card className='mt-5 p-2'>
        <Card.Img variant="top" className='w-100' src={img3} />
        <Card.Body>
          <Card.Title>Advanced Level</Card.Title>
          <Card.Text>
          .One can take 2 to 5 hours course .<br />
          .Can take personal consoling.
            <br />
            <span className='text-info fw-semibold'>Price:500$ only</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Contact Now: +01xxxxxxx</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );

};

export default GetPremium;