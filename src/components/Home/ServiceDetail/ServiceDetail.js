import React from 'react';
import './serviceDetail.css'

const ServiceDetail = ({service}) => {
    return (
        <div className ="col-md-3 text-center sdStyle">
            <img src={service.img} alt=""/>
            <h5>{service.name}</h5>
            <p style = {{color: '#d5d5d5'}}>{service.description}</p>
        </div>
    );
};

export default ServiceDetail;