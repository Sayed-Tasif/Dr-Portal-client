import React from 'react';
import './abStyle.css';
import doctor from '../../../imgs/doctor.png';

const AppointmentBody = () => {
    return (
        <section className ='appointmentBody'>
            <div className= 'container'>
                <div className ='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={doctor} alt=""/>
                    </div>
                    <div className='col-md-7 text-white py-5'>
                    <h5 style ={{color: '#6acece'}}>Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btnGrd">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBody;