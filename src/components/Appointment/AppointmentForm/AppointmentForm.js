import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '800px'
    }
};
Modal.setAppElement('#root')
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const {register,handleSubmit} = useForm();
    const onSubmit = data => {

        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success){
                closeModal();
                alert('Appointment Created Successfully.');
            }
        })
        
    }

    return (
        <section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className='text-center' style={{color: 'rgb(15, 207, 234)'}}>{appointmentOn}</h2>
                <p className="text-secondary text-center">
                <small>On {date.toDateString()}</small>
                </p>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="name" {...register("name")} className="form-control" id="formGroupExampleInput" placeholder="Your Name" name='name'/>
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="text" className="form-control" {...register("phone")} id="formGroupExampleInput" placeholder="Phone Number" name='phone'/>
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="text" className="form-control" {...register("email")} id="formGroupExampleInput" placeholder="Email" name='email'/>
                    </div>
                    <br/>
                    <div className='form-group row'>
                        <div className='col-4'>
                            <select className="form-control" name='gender' id="" {...register("gender")}>
                                <option disabled={true} value="Not Set">No Set</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        <div className='col-4'>
                            <input className='form-control' {...register("age")} type="text" placeholder='Your Age' name='age' />
                        </div>
                        <div className='col-4'>
                            <input className='form-control' {...register("weight")} type="number" placeholder='Weight' name='weight'/>
                        </div>
                    </div>
                    <br/>
                    <div className='form-group' style={{textAlign:'right'}}>
                        <button type="submit" className='btn btnGrd'>Submit</button>
                    </div>
                </form>
            </Modal>
        </section>
    );
};

export default AppointmentForm;