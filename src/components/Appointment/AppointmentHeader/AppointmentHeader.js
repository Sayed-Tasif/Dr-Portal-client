import React from 'react';
import chair from '../../../imgs/chair.png';
import '../../Home/HeaderMain/HMStyle.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handelDateChange}) => {
    
    return (
        <main style ={{height: '500px'}} className="d-flex align-items-center row backgroundDecor">
            <div className="col-md-4 offset-md-1">
                <h1>Appointment</h1>
                <Calendar
                onChange={handelDateChange}
                value={new Date()}
                />
            </div>
            <div style ={{width:'500px'}} className="col-md-6 ms-5">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppointmentHeader;