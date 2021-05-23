import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>

            <div className='card p-3'>
                <div className='card-body text-center'>
                    <h5 className='card-title' style={{}}>{booking.service}</h5>
                    <h6>{booking.time}</h6>
                    <p><small style={{color: '#6c757d'}}>{booking.quantity} SPACES AVAILABLE</small></p>
                    <button onClick={openModal} className='btn btnGrd text-uppercase'>Book Appointment</button>
                    <AppointmentForm appointmentOn = {booking.service} modalIsOpen = {modalIsOpen} closeModal ={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
    
        </div>
    );
};

export default BookingCard;