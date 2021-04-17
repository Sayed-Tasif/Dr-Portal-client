import React from 'react';
import descriptionImg from '../../../imgs/desc1.png';
import './dbStyle.css';
const DescriptionBody = () => {
    return (
        <section className = 'd-flex row align-items-center sectionStyle pb-3'>
            <div className ='imageStyle col-3'>
                <img src={descriptionImg} alt="" className="img-fluid"/>
            </div>
            <div className= 'DescriptionStyle col-5'>
                <h1 className='col-9'>Exceptional Dental Care, on Your Terms</h1>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt magni aspernatur eos doloribus error nemo iure quaerat inventore excepturi, recusandae numquam iusto tempora eveniet reprehenderit qui tenetur! Porro, eligendi minus
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum beatae natus similique fugiat, nam assumenda neque laborum? Nobis, soluta.
                </p>
                <br/>
                <button className= "btn btnGrd">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default DescriptionBody;