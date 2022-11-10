import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import StarIcon from '@mui/icons-material/Star';
import { useRadioGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const ServiceReview = ({ _id, name }) => {

    const [user, loading, error] = useAuthState(auth)

    const [reviews, setReviews] = useState([])


    const submitReview = (e) => {
        e.preventDefault()
        const time = new Date()
        const fullDate = time.toLocaleTimeString()
        const fullTime = time.toLocaleDateString()
        const userName = user?.displayName;
        const email = user.email;
        const userImg = user.photoURL;
        const servceId = _id;
        const message = e.target.message.value;
        const ratings = e.target.ratings.value;
        const serviceName = name;
        const review = { userName, userImg, email, servceId, message, ratings, serviceName, fullTime, fullDate }
        console.log(review)

        fetch('https://sarver.vercel.app/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added successFully')
                }
            })
        e.target.reset()
    }



    useEffect(() => {
        const url = `https://sarver.vercel.app/review?serviceName=${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [name, submitReview])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-slate-200 p-5'>
            <h1 className='mt-10 font-bold text-xl'>Service Review</h1>

            <div>
                {
                    reviews?.map(data => (
                        <div className='mt-10 p-3 bg-white rounded '>

                            <div className='rounded flex items-center gap-5'>
                                <img className='h-16 w-16 rounded-full border-2' src={data.userImg} alt="" />
                                <div>
                                    <p className='text-sm mt-3'>{data.userName}</p>
                                    <span className='text-xm flex gap-3 mt-4 mb-4'>
                                        <small className='bg-simple font-bold text-white p-1 rounded'>{data.fullDate}</small>
                                        <small className='bg-simple font-bold text-white p-1 rounded'>{data.fullTime}</small>
                                    </span>
                                    <p className='flex items-center gap-2'>
                                        <p className='bg-orange-400  px-3 rounded'>{data.ratings}</p>

                                        <span className='text-orange-500  block'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm mt-2'>{data.message}</p>
                        </div>
                    ))
                }
            </div>

            {
                user ? <div>
                    <form onSubmit={submitReview} className=" shadow-2xl w-96  p-5 mx-auto mt-10 bg-white">
                        <div className="form-control mt-5">
                            <input type="text" placeholder="Ratings (0 - 5)" name='ratings' className="bg-slate-200 rounded w-full mt-5 p-2" />
                        </div>
                        <div className="form-control mt-5">
                            <textarea type="text" placeholder="Message" name='message' className="input h-24 input-bordered bg-slate-200 rounded w-full mt-5 p-2" />
                        </div>
                        <div className="form-control mt-5">
                            <button htmlFor="my-modal" className="btn bg-head border-0">Submit</button>
                        </div>
                    </form>
                </div>
                    : <Link to='/login' className='text-red-500 text-sm font-medium mt-5'>LogIn first To add Review</Link>
            }
            {

            }
        </div>
    );
};

export default ServiceReview;