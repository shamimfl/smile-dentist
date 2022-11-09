import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import StarIcon from '@mui/icons-material/Star';

const MyReview = () => {

    const [user, loading, error] = useAuthState(auth)
    const [reviews, setReview] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-5 md:px-20 '>
            <h1 className='text-xl text-center font-bold mt-10'>Total Review : {reviews.length}</h1>
            <div className='flex justify-center items-center mt-2 mb-5'>
                <div className='h-2 w-20 rounded-xl bg-teal-500 z-20 mr-[-10px]'></div>
                <div className='h-4 w-20 rounded-xl bg-head '></div>
                <div className='h-2 w-20 rounded-xl bg-teal-500 ml-[-10px]'></div>
            </div >
            {
                    reviews?.map(data=> (
                        <div className='mt-10 p-3 bg-base-200 rounded '>
                            
                            <div className='rounded flex items-center gap-5'>
                            <img className='h-16 w-16 rounded-full border-2' src={data.userImg} alt="" />
                            <div>
                            <p className='text-xl font-bold text-teal-500 mt-3'>{data.serviceName}</p>
                            <p className='text-sm mb-2 mt-3'>{data.userName}</p>
                            <p className='flex items-center gap-2'>
                                <p className='bg-orange-400 text-white font-bold  px-3 rounded'>{data.ratings}</p>
                                <span className='text-orange-500  block'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon  />
                            </span>
                            </p>
                            </div>
                            </div>
                            <p className='text-sm mt-2 '>{data.message}</p>
                            <button className='px-5 py-1 bg-success font-bold uppercase text-white rounded-sm border-0  mt-5'>Edit</button>
                            <button className='px-5 py-1 bg-warning font-bold uppercase text-white rounded-sm border-0 ml-5 mt-5'>Delete</button>
                        </div>
                    ))
                }
        </div>
    );
};

export default MyReview;