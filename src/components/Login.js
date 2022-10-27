import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import ForLoginReg from './ForLoginReg';


const Login = () => {
    const [e, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const submit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast('Verify your email address.')
                }
            })
            .catch(e => {
                console.error(e)
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Form onSubmit={submit} className='m-5 p-5 border shadow-lg rounded align-items-center'>
            <Form.Group className="mb-3 pe-5 pl-5 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='w-50'  name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3 pe-5 pl-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='w-50' name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>Don't have account? Then Register first.</p>
            <Form.Text className="text-danger">
                {e}
            </Form.Text>
            <ForLoginReg></ForLoginReg>
        </Form>
    );
};

export default Login;