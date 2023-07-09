import React from 'react';
import Navbar from '../../pages/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/footer/Footer';

const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;