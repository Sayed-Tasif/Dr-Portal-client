import React from 'react';

const FeedbackCard = (props) => {
   
    return (
        <div className='col-md-4 info-card card-style'>
            <div className= 'd-flex mb-5 mt-5 align-items-center justify-content-center justify-content-between m-3'>
                <div>
                    {/* <h1>{props?.user?.name}</h1> */}
                    <p className='mb-5'>{props?.user?.description}</p>
                    
                    <div className='d-flex align-items-center'>
                        <div className=' me-3'>
                            <img src={props?.user?.userImage} alt=""/>
                        </div>
                        <div>
                            <h6 style={{color:'#0fcfea'}}>{props?.user?.name}</h6>
                            <p style={{color:'#6c757d'}}>{props?.user?.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;