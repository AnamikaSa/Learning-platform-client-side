import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const submit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Now verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }

    const accept = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Form onSubmit={submit} className='mt-5 p-5 shadow-lg rounded w-50 ' style={{margin:'auto'}}>
            <Form.Group className="mb-3 pe-5 pl-5" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control  className='w-50' name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3 pe-5 pl-5" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control className='w-50'  name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

            <Form.Group className="mb-3 pe-5 pl-5" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  className='w-50' name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 pe-5 pl-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  className='w-50' name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3 pe-5 pl-5" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={accept}
                    label={<>Accept Terms and conditions</>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;