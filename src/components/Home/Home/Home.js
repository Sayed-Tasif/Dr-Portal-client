import React from 'react';
import AppointmentBody from '../AppointmentBody/AppointmentBody';
import Blog from '../Blog/Blog';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import FeedbackInfo from '../FeedbackInfo/FeedbackInfo';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AppointmentBody></AppointmentBody>
            <Testimonial></Testimonial>
            <FeedbackInfo></FeedbackInfo>
            <FeedbackCard></FeedbackCard>
            <Blog></Blog>
        </div>
    );
};

export default Home;