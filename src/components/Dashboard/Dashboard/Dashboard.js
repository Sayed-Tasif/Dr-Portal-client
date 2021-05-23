import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react/cjs/react.development';
import Appointmentbydate from '../AppointmentByDate/Appointmentbydate';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}


const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div className = "mt-3">
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar
                onChange ={handleDateChange}
                value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <Appointmentbydate></Appointmentbydate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;