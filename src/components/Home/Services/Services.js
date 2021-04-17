import React from 'react';
import Fluoride from '../../../imgs/tooth1.png';
import Cavity from '../../../imgs/tooth2.png';
import Whitening from '../../../imgs/tooth3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
    img: Fluoride,
    name: 'Fluoride Treatment',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem veniam aliquid nesciunt modi."
    },
    {
        img: Cavity,
        name: 'Cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem veniam aliquid nesciunt modi."
    },
    {
        img: Whitening,
        name: 'Teeth Whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem veniam aliquid nesciunt modi."
    }
]

const Services = () => {
    return (
        <section className="services-container">
            <div className = "text-center">
                <h5 style= {{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h1 style ={{color: '#203047 '}} className ="fw-bold">Services We Provide</h1>
            </div>
            <div className ="row d-flex justify-content-center">
                <div className="w-100 row justify-content-center " style ={{columnGap: '40px'}}>
                    {
                        serviceData.map(service => <ServiceDetail service = {service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;