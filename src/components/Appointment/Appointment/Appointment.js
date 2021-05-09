import React from 'react';
import { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handelDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handelDateChange = {handelDateChange}></AppointmentHeader>
            <BookAppointment date = {selectedDate}></BookAppointment>
        </div>
    );
};

export default Appointment;