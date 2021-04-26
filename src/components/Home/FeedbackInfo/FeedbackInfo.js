import React from 'react';
import user1 from '../../../imgs/usr1.png';
import user2 from '../../../imgs/usr2.png';
import user3 from '../../../imgs/usr3.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
const userData = [
    {
        id: 1,   
        name: 'Wilson Harry',
        location: 'California',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab odit iusto eligendi vel itaque libero. Minus, dolorum? Asperiores dolores fugiat sit perferendis beatae? Voluptatibus modi perferendis amet corrupti perspiciatis!",
        userImage: user1
    },
    {
        id: 2,
        name: 'Wilson Harry',
        location: 'California',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab odit iusto eligendi vel itaque libero. Minus, dolorum? Asperiores dolores fugiat sit perferendis beatae? Voluptatibus modi perferendis amet corrupti perspiciatis!",
        userImage: user2
    },
    {
        id: 3,
        name: 'Wilson Harry',
        location: 'California',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab odit iusto eligendi vel itaque libero. Minus, dolorum? Asperiores dolores fugiat sit perferendis beatae? Voluptatibus modi perferendis amet corrupti perspiciatis!",
        userImage: user3
    }
]


const FeedbackInfo = () => {
    
    return (
        <section className='row d-flex justify-content-center'>
            <div className='w-75 row' >
                {
                    userData.map(user => <FeedbackCard key={user.id} user={user}/>)
                }
            </div>
        </section>

    );
};

export default FeedbackInfo;