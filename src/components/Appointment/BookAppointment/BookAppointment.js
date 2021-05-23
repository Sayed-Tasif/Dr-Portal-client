import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [{
    "id": 1,
    "service": "Teeth Orthodontics",
    "time": "8:00 AM - 9:00 AM",
    "quantity": 10
  }, {
    "id": 2,
    "service": "Teeth Cleaning",
    "time": "8:00 AM - 9:00 AM",
    "quantity": 10
  }, {
    "id": 3,
    "service": "Cosmetic Dentistry",
    "time": "8:00 AM - 9:00 AM",
    "quantity": 10
  }, {
    "id": 4,
    "service": "Cavity Protection",
    "time": "11:00 AM - 12:00 PM",
    "quantity": 10
  }, {
    "id": 5,
    "service": "Teeth Orthodontics",
    "time": "6:00 AM - 7:00 AM",
    "quantity": 10
  }, {
    "id": 6,
    "service": "Teeth Orthodontics",
    "time": "10:00 AM - 11:00 AM",
    "quantity": 10
  }]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center' style={{color: '#0fcfea'}}>Available Appointment on {date.toDateString()}</h2>
            <br/>
            <br/>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} booking = {booking} date={date}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;