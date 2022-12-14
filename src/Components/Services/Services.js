import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Services = () => {

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://sarver.vercel.app/allservice').then(res =>
            res.json()
        )
    )
    useEffect(() => {
        document.title = `Services-Dentist`
    }, [])

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <h1 className='text-xl font-bold text-teal-500 uppercase mt-5 text-center'>Our All Services</h1>
            <div className='flex justify-center items-center mt-5 mb-5'>
                <div className='h-2 w-20 rounded-xl bg-teal-500 z-20 mr-[-10px]'></div>
                <div className='h-4 w-20 rounded-xl bg-head '></div>
                <div className='h-2 w-20 rounded-xl bg-teal-500 ml-[-10px]'></div>
            </div >

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-20'>
                {
                    data?.map(service => (
                        <div className='p-5 shadow-md rounded bg-base-200' key={service._id}>
                            <PhotoProvider>
                                <PhotoView src={service?.img}>
                                    <img className='h-60 w-full rounded overflow-hidden' src={service?.img} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                            <p className=' font-bold  text-teal-500 mt-4 uppercase'>{service?.name}</p>
                            <p className='text-3xl mt-2'>${service?.price}</p>
                            <p className='font-bold text-orange-500  flex items-center gap-5'>
                                <p className='text-xl mt-1'>{service?.ratings}</p>
                                <span>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </span>
                            </p>
                            <p className='mt-3 font-sm font-bold'>{service?.description.slice(0, 100) + '.......'}</p>

                            <div className='text-end'>
                                <Link to={`/details/${service._id}`} className='px-5 py-1 rounded-sm uppercase text-white font-bold bg-head border-0 mt-5 w-2/4 ml-auto'>Details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Services;