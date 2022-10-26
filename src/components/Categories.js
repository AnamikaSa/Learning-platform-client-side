import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
// import Courses from './Courses';
import LeftSide from './LeftSide';
import img1 from '../images/C1.jpg';
import img2 from '../images/C2.png';
import img3 from '../images/C3.png';
import img4 from '../images/C4.jpg';
import img5 from '../images/C5.jpg';
import img6 from '../images/C6.jpg';
import img7 from '../images/C7.png';
import { Link } from 'react-router-dom';
const Categories = () => {
    const [categories, setC] = useState([]);

    useEffect ( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setC(data));
    }, [])
    return (
        <Container>
            <Row>
                <Col lg='3'>
                <LeftSide></LeftSide>
                </Col>

                <Col lg='9' className='mt-5'>
                  <Col className='d-flex'>
                    <div className='p-3'>
                    <Image className='w-100' src={img1}></Image>
                      <Link to={'/category/01'} className='text-decoration-none text-success fw-bold'>View Details</Link>
                        </div>
                        <div className='p-3'>
                    <Image className='w-100' src={img2}></Image>
                      <Link to={'/category/02'} className='text-decoration-none text-success fw-bold'>View Details</Link>
                        </div>
                        <div className='p-3'>
                    <Image className='w-100' src={img3}></Image>
                      <Link to={'/category/03'} className='text-decoration-none text-success fw-bold'>View Details</Link>
                        </div>
                </Col>

                <Col className='d-flex'>
                    <div className='p-3'>
                    <Image className='w-100' src={img4}></Image>
                      <Link to={'/category/04'} className='text-decoration-none text-success fw-bold'>View Details</Link>
                        </div>
                        <div className='p-3'>
                    <Image className='w-100' src={img5}></Image>
                      <Link to={'/category/05'} className='text-decoration-none text-success fw-bold'>View Details</Link>
                        </div>
                        <div className='p-3'>
                    <Image className='w-100' src={img6}></Image>
                      <Link to={'/category/06'} className='text-decoration-none text-success fw-bold'>View Details</Link>
                        </div>
                </Col>

                <Col lg='4' className='d-flex'>
                    <div className='p-3'>
                    <Image className='w-100' src={img7}></Image>
                      <Link to={'/category/07'} className='text-decoration-none text-success fw-bold'>View Details</Link>
                        </div>
                </Col>


                </Col>
            </Row>
        </Container>
    );
};

export default Categories;