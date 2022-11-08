import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';


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
        </div>
    );
};

export default Details;