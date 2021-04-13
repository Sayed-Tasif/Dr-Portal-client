import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './infocard.css'

const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 info-card'>
            <div className= {`d-flex mb-5 align-items-center justify-content-center info-container info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className='infoIcon' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;