import React, {} from 'react';
import { Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const c = useLoaderData();
    
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
                        <Card className="mt-5">
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
                        </Card>
        
                    </div>)
                }
        </div>
    );
};

export default Courses;