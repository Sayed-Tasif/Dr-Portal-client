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

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className='text-brand text-center' style={{color: 'rgb(15, 207, 234)'}}>{appointmentOn}</h2>
                <p className="text-secondary text-center">
                <small>On {date.toDateString()}</small>
                </p>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <input type="name" class="form-control" id="formGroupExampleInput" placeholder="Your Name"/>
                    </div>
                    <br/>

                    <div class="form-group">
                        <input type="phone" class="form-control" id="formGroupExampleInput" placeholder="Phone Number"/>
                    </div>
                    <br/>

                    <div class="form-group">
                        <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Email"/>
                    </div>
                    <br/>
                    <div className='form-group row'>
                        <div className='col-4'>
                            <select className="form-control" name='gender' id="">
                                <option disabled={true} value="Not Set">No Set</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        <div className='col-4'>
                            <input className='form-control' type="text" placeholder='Your Age' />
                        </div>
                        <div className='col-4'>
                            <input className='form-control' type="number" placeholder='Weight'/>
                        </div>
                    </div>
                    <br/>
                    <div className='form-group' style={{textAlign:'right'}}>
                        <button type='submit' className='btn btnGrd'>Submit</button>
                    </div>
                </form>
            </Modal>
        </section>
    );
};

export default AppointmentForm;