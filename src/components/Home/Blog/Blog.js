import React from 'react';
import doctor1 from '../../../imgs/usr1.png';
import doctor2 from '../../../imgs/usr2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import './blog.css';

const Blog = () => {
    return (
        <section className='text-center container mb-5'>
            <h5 style={{ color: '#0fcfea' }}>OUR BLOG</h5>
            <h1 style={{ fontSize: '60px' }}>From Our Blog</h1>
            <div className='d-flex col-md-4'>
                <div>
                    <div>
                        <div className='slide1 mt-5 d-flex align-items-center'>
                            <div className='' style={{ color: 'white' }}>
                                <div className='ms-3 text-start'>
                                    <p style={{ fontSize: '20px' }}>Rashed Kabir</p>
                                    <p>22 April 2020</p>
                                </div>
                                <div className='text-start ms-3 col-md-9'>
                                    <h5>Check at least a doctor in a year for your teeth</h5>
                                </div>
                                <div style={{ fontSize: '70px', marginTop: '50px' }} className='text-start ms-3'>
                                    <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Blog;