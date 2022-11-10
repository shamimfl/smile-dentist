import React from 'react';

const Care = () => {
    return (
        <div className="bg-base-100 mt-10  mb-20 lg:px-20 p-5">
            <div className=" lg:flex items-center  justify-between gap-20">
                <img  src="https://img.freepik.com/free-vector/teeth-dental-care-medical-background_1017-17395.jpg?w=740&t=st=1667901365~exp=1667901965~hmac=af73c35db6ca9fbc27a23f4f5ac63309403547a0fad81d8959f3051d8eef50de" className="max-w-sm w-full rounded-lg shadow-2xl" />
                <div className='lg:w-2/4'>
                    <h1 className="text-3xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                    <p className="py-6">Unhappy with your smile? Dentists have an array of tools and techniques at their disposal for improving the appearance of your smile.</p>
                    <button className="btn bg-head border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Care;