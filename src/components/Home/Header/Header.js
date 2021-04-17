import React from 'react';
import AppointmentBody from '../AppointmentBody/AppointmentBody';
import BusinessInfo from '../businessInfo/BusinessInfo';
import DescriptionBody from '../DescriptionBody/DescriptionBody';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './header.css'
const Header = () => {
    return (
        <div className="backgroundDecor " >
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
            <DescriptionBody></DescriptionBody>
        </div>
    );
};

export default Header;