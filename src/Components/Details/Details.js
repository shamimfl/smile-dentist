import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ServiceReview from '../ServiceReview/ServiceReview';


const Details = () => {
    const [details, setDetails] = useState([])

    const { _id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/service/${_id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        console.log(`http://localhost:5000/service/${_id}`)
    }, [])

    return (
        <div className='p-5 lg:px-10'>
            <div className='md:flex justify-between  gap-20'>
                <img className='md:w-2/4 h-96 rounded mt-5' src={details?.img} alt="" />
                <div className='lg:w-2/4 mt-5'>
                    <h1 className='text-3xl font-bold  text-teal-500'>{details?.name}</h1>

                    <p className='mt-5 text-sm'>{details.description}</p>
                    <p className='flex gap-5 mt-5'>
                        <p className='bg-orange-500 px-5 rounded text-white '>{details?.ratings}</p>
                        <span className='text-orange-500'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </span>
                    </p>
                    <h3 className='mt-5 text-5xl text-teal-500'>$ {details.price}</h3>
                    <div className='flex gap-3 mt-10'>
                        <button className='btn  bg-head mt-5 border-0'>Appointment Now</button>
                        <Link to='/services' className='btn  bg-head mt-5 border-0'>More Services</Link>
                    </div>
                </div>
            </div>
            <div className='mt-20 w-full bg-base-200 p-5'>
                <h1 className='text-xl'>Ratings & Reviews of{details.name}</h1>
                <div className='lg:flex gap-28 items-center'>
                    <div className=''>
                        <h1 className='text-3xl font-bold mt-5'>{details.ratings} <span className='text-xl text-slate-400'>/5.0</span></h1>
                        <span className='text-orange-500 mt-5 block'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </span>
                    </div>
                    <div className='mt-5'>


                        <div className='flex items-center gap-5 '>
                            <span className='text-orange-500  block'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon  />
                            </span>
                            <div className='h-3 md:w-60 w-40 bg-orange-400'></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <span className='text-orange-500  block'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon  className='text-slate-400'/>
                            </span>
                            <div className='h-3 md:w-60 w-40 bg-orange-400'></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <span className='text-orange-500  block'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon className='text-slate-400' />
                                <StarIcon className='text-slate-400' />
                            </span>
                            <div className='h-3 md:w-60 w-40 bg-orange-400'></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <span className='text-orange-500  block'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon className='text-slate-400'/>
                                <StarIcon className='text-slate-400'/>
                                <StarIcon className='text-slate-400'/>
                            </span>
                            <div className='h-3 md:w-60 w-40 bg-orange-400'></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <span className='text-orange-500  block'>
                                <StarIcon />
                                <StarIcon className='text-slate-400'/>
                                <StarIcon className='text-slate-400'/>
                                <StarIcon className='text-slate-400'/>
                                <StarIcon className='text-slate-400'/>
                            </span>
                            <div className='h-3 md:w-60 w-40 bg-orange-400'></div>
                        </div>
                    </div>
                </div>
                <ServiceReview _id={details._id}  name={details.name} ></ServiceReview>
            </div>
        </div>
    );
};

export default Details;