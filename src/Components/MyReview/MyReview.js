import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyReview = () => {

    const [user, loading, error] = useAuthState(auth)
    const [reviews, setReview] = useState([])

    const [remove , setRemove] = useState('hidden')


    const navigate = useNavigate()

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://sarver.vercel.app/review/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete successfully')
            })
    }

    useEffect(() => {
        document.title = `My Review-Dentist`
    }, [])

    useEffect(() => {
        fetch(`https://sarver.vercel.app/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dentist-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                navigate('/error')
                }
                return res.json();
            })
            .then(data => {
                setReview(data);
            })
    }, [user?.email, handleDelete])

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
            <h1 className='text-center mt-20 font-bold text-red-500'>{reviews[0]?.userImg ?  '' : 'No data Found'}</h1>
            
            {
            
        reviews?.map(data => (
                    <div className='mt-10 p-3 bg-base-200 rounded bg-slate-200'>
                        <div className={`${remove} bg-white  w-96 p-5`}>
                        <button onClick={() => handleDelete(data?._id)} className='px-5 py-1 ml-5 font-bold bg-red-400 uppercase text-white rounded-sm border-0 '>confrim</button>
                        <button onClick={()=> setRemove('hidden')} className='px-5 py-1 ml-5 font-bold bg-red-400 uppercase text-white rounded-sm border-0 '>cancel</button>
                        </div>
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
                                        <StarIcon />
                                    </span>
                                </p>
                            </div>
                        </div>
                        <p className='text-sm mt-5 mb-5 block'>{data.message}</p>
                        <Link to={`/edit/${data._id}`} className='px-5 py-1 bg-head font-bold uppercase text-white rounded-sm border-0  mt-5'>Edit</Link>
                        <button onClick={()=> setRemove('block')} className='px-5 py-1 ml-5 font-bold bg-red-400 uppercase text-white rounded-sm border-0 '>Delete</button>
                    </div>
                )) 
                 

            }
        </div>
    );
};

export default MyReview;