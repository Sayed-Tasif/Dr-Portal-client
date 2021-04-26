import React from 'react';
import doctor1 from '../../../imgs/usr1.png';
import doctor2 from '../../../imgs/usr2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import './blog.css';

const Blog = () => {
    return (
        <section className='text-center mb-5'>
            <h5 style={{ color: '#0fcfea' }}>OUR BLOG</h5>
            <h1 style={{ fontSize: '60px' }}>From Our Blog</h1>
            <div className='d-flex mt-5 row gx-3 justify-content-center'>

                <div className=' col-md-4' style={{ width: '400px' }}>
                    <div className='slide1 d-flex align-items-center'>
                        <div className='' style={{ color: 'white' }}>
                            <div className='ms-3 text-start mt-4'>
                                <p style={{ fontSize: '20px' }}>Rashed Kabir</p>
                                <p>22 April 2020</p>
                            </div>
                            <div className='text-start ms-3 col-md-9'>
                                <h5>Check at least a doctor in a year for your teeth</h5>
                            </div>
                            <div style={{ fontSize: '70px', marginTop: '50px' }} className='text-start ms-3 mb-4'>
                                <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' col-md-4 border-end border-bottom border-start rounded-2 shadow-sm'>
                    <div className='d-flex p-4 align-items-center'>
                        <div>
                            <img src={doctor1} alt="" />
                        </div>
                        <div className='ms-3'>
                            <h5 ><b>Dr. Caudi</b></h5>
                            <p style={{color:'#c4c3c5'}}>22 Jan 2021</p>
                        </div>
                    </div>
                    <div className='text-start ps-4 pe-3 col-md-11 mb-4'>
                            <h4>2 times of brush in a day can keep you healthy</h4>
                            <br/>
                            <p style={{fontSize:'18px', color:'#c4c3c5'}} className='col-md-8'>
                                It is a long established fact that by the readable content of a lot layout. The point
                            </p>
                    </div>
                </div>

                <div className='ms-2 col-md-4 border-end border-bottom border-start rounded-2 shadow-sm'>
                    <div className='d-flex p-4 align-items-center'>
                        <div>
                            <img src={doctor2} alt="" />
                        </div>
                        <div className='ms-3'>
                            <h5 ><b>Dr. John Mitchel</b></h5>
                            <p style={{color:'#c4c3c5', textAlign: 'left'}}>10 Apr 2020</p>
                        </div>
                    </div>
                    <div className='text-start ps-4 pe-3 col-md-11 mb-4'>
                            <h4>The tooth cancer is taking a challenge</h4>
                            <br/>
                            <p style={{fontSize:'18px', color:'#c4c3c5'}} className='col-md-8'>
                                It is a long established fact that by the readable content of a lot layout. The point
                            </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Blog;