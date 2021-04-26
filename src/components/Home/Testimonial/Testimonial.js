import React from 'react';
import quoteSign from '../../../imgs/quote.png';
import './testimonial.css';

const Testimonial = () => {
    return (
        <section className='mt-5 mb-4'>
            <div className='d-flex justify-content-center'>
                <div className='row justify-content-between upperCol'>
                    <div className='col-5'>
                        <h6 style={{color: '#0fcfea', fontSize:'20px'}}>TESTIMONIAL</h6>
                        <h1 style= {{fontSize: '50px'}}>What's Our Patients Says</h1>
                    </div>
                    <div className='col-4 tImgStyle'>
                        <div className='d-flex justify-content-end'>
                            <img src={quoteSign} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;