import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const OurServices = () => {

    const [services, setService] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])



    return (
        <div className='p-5'>
            <h1 className='text-xl font-bold text-teal-500 uppercase mt-20 text-center'>Our Services</h1>
            <div className='flex justify-center items-center mt-5 mb-20'>
                <div className='h-2 w-20 rounded-xl bg-teal-500 z-20 mr-[-10px]'></div>
                <div className='h-4 w-20 rounded-xl bg-head '></div>
                <div className='h-2 w-20 rounded-xl bg-teal-500 ml-[-10px]'></div>
            </div >

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-20'>
                {
                    services?.map(service => (
                        <div className='p-5 shadow-md rounded bg-base-200' key={service._id}>
                            <img className='h-60 rounded overflow-hidden' src={service?.img} alt="" />
                            <p  className=' font-bold  text-teal-500 mt-4 uppercase'>{service?.name}</p>
                            <p className='text-3xl mt-2'>${service?.price}</p>
                            <p className='font-bold text-orange-500  flex items-center gap-5'>
                               <p className='text-xl mt-1'>{service?.ratings}</p>
                                <span>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                </span>
                            </p>
                            <p className='mt-3 font-sm font-bold'>{service?.description.slice(0,100)+'.......'}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center mt-5'>
            <Link to='/services' className='btn bg-head border-0 mt-5'>See All services</Link>
            </div>
        </div>
    );
};

export default OurServices;