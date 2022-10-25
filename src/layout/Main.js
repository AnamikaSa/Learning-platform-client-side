import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWithBackground from '../components/HeaderWithBackground';

const Main = () => {
    return (
        <div>
            <HeaderWithBackground></HeaderWithBackground>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;