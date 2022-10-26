import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import img1 from '../images/1.jpg';
const Home = () => {
    // const h = useLoaderData();
    // console.log(h);
    return (
        <div>
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-100 "
                        src={img1}
                        alt=""
                    />
                    <Carousel.Caption className='pb-5 mb-5'>
                        <h1>Let's Learn Together </h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;