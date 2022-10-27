import React, {} from 'react';
import { useRef } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';


const Courses = () => {
    const c = useLoaderData();
    const ref= useRef()
    console.log(c);
    // const [categories, setC] = useState([]);
    // useEffect ( () =>{
    //     fetch('http://localhost:5000/category/01')
    //     .then( res => res.json())
    //     .then(data => setC(console.log(data)));
    // }, [])
 
    return (
        <div>
                {
                    c.map(category=> <div key={category._id}>
                        <Card ref={ref} className="mt-5">
                            <Card.Header className='d-grid justify-content-center '>
                                
                                <div>
                                    <p className='fw-bold'>{category.title}</p>
                                    <Image className='me-2 w-100' src={category?.image_url} >
                                    </Image>
                                </div>

                                    <p className='fs-5 fw-bold'>Course Teacher: {category?.teacher?.name}</p>
                                    < p className='text-info fw-bold'>Rating: {category?.rating?.number}</p>
                                    <p className='text-info'> Badge: {category?.rating?.badge}</p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {category?.details}
                                </Card.Text>
                            </Card.Body>

                                <div>
                                    <ReactToPrint trigger={()=><Button className='mx-5 mb-2'>Print to Pdf</Button>} content={()=>ref.current} />

                                    <Link className='mb-2 btn btn-success' to='/premium'>Get premiun access</Link>
                                </div>
                        </Card>
        
                    </div>)
                }
        </div>
    );
};

export default Courses;