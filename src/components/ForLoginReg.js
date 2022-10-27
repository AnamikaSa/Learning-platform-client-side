import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const ForLoginReg = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const GithubProvider =new GithubAuthProvider();

    const GoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error))
    }

    const githubSignIn=()=>{
        providerLogin(GithubProvider)
         .then(res=>{
            const user = res.user;
            console.log(user);
         })
         .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={GoogleSignIn} className='mb-2 mt-4' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='mb-5' onClick={githubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default ForLoginReg;