import React from 'react';
import AppointmentBody from '../AppointmentBody/AppointmentBody';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AppointmentBody></AppointmentBody>
        </div>
    );
};

export default Home;