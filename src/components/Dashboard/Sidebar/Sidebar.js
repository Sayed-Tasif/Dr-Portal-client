import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCog, faFile, faSignOutAlt, faTh, faUserFriends, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './sidebarStyel.css'



const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2">
            <div className ="options d-flex align-items-end flex-column">
            <div className='d-flex flex-column p-2 upperOpt'>
            <a href="#"><FontAwesomeIcon icon={faTh}/> Dashboard</a>
            <a href="/appointment"><FontAwesomeIcon icon={faCalendar}/> Appointment</a>
            <a href="/appointment"><FontAwesomeIcon icon={faUserFriends}/> Patients</a>
            <a href="/appointment"><FontAwesomeIcon icon={faFile}/> Prescriptions</a>
            <a href="/addDoctor"><FontAwesomeIcon icon={faUserPlus}/> Add Doctor</a>
            <a href="/appointment"><FontAwesomeIcon icon={faCog}/> Settings</a>
            </div>

            <div className='lowerOpt mt-auto p-2'>
            <a href="/appointment"><FontAwesomeIcon icon={faSignOutAlt}/> Logout</a>
            </div>

            </div>
        </div>
    );
};

export default Sidebar;