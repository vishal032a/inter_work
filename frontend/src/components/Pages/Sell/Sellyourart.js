import React from 'react';
import Footer from '../../Layouts/Footer/Footer';
import Nav2 from '../../Layouts/Navbar/Nav2';
import { userdata } from '../Login/Login';
import InfoPage from './InfoPage'


const Sellyourart = () => {
    return (
        <>
            <Nav2 />
            {userdata.isDesigner === "" ? (
                <InfoPage/>
            ):(
                <h1>Here is your form</h1>
            )}
            <Footer bgcol="white" textcol="black" />
        </>
    );
};

export default Sellyourart;
