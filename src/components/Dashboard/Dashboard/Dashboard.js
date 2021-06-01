import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react/cjs/react.development';
import Appointmentbydate from '../AppointmentByDate/Appointmentbydate';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    height: "100%"
}


const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date =>{
        setSelectedDate(date);

        fetch('http://localhost:5000/addAppointmentByDate', {
            method:'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))

    }
    return (
        <div>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5" style={{height:'600px'}}>
                <Calendar
                onChange ={handleDateChange}
                value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <Appointmentbydate appointments = {appointments}></Appointmentbydate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;