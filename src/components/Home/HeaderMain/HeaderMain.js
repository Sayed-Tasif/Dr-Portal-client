import React from 'react';
import chair from '../../../imgs/chair.png';
import './HMStyle.css';
const HeaderMain = () => {
    return (
        <main style ={{height: '500px'}} className="d-flex align-items-center row">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile<br></br> Starts Here</h1>
                <p className = "text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit odit ad numquam aperiam distinctio, qui tempore nisi quod repudiandae iusto.</p>
                <button className="btn btnGrd">Get Appointment</button>
            </div>
            <div style ={{width:'500px'}} className="col-md-6 ms-5">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;