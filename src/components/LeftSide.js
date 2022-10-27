import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setC] = useState([]);

    useEffect ( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setC(data));
    }, [])
 
    return (
        <div>
            <h4 className='mt-5'>Choose Yours: 
            </h4>
            <div className='mt-2 bg-dark pt-5 pb-5 ps-2 w-100'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-info'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;