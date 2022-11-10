import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { toast } from 'react-toastify';

const Edit = () => {
    const [review, setReview] = useState([])
    const { _id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:5000/edit/${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dentist-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    const handleEdit =(e)=>{
        e.preventDefault();
        const message = e.target.message.value;
        const ratings = e.target.ratings.value;

        fetch(`http://localhost:5000/edit/${_id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({message, ratings})
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
                toast.success('update Successfully')
                e.target.reset()
                navigate('/myReview')
            }
        } 
        )
        
    }




return (
    <div className='lg:px-20 p-5'>

        {
            review?.map(data => (
                <form onSubmit={handleEdit} className='mt-10 p-3 bg-base-200 rounded '>

                    <div className='rounded flex items-center gap-5'>
                        <img className='h-16 w-16 rounded-full border-2' src={data?.userImg} alt="" />
                        <div>
                            <p className='text-xl font-bold text-teal-500 mt-3'>{data?.serviceName}</p>
                            <p className='text-sm mb-2 mt-3'>{data?.userName}</p>
                            <p className='flex items-center gap-2'>
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
                    <input name='ratings' defaultValue={data?.ratings} className='text-sm mt-2  p-2 input-bg lg:w-2/4 w-full  block'></input>
                    <textarea name='message' className='text-sm mt-2  h-24 input-bg lg:w-2/4 w-full  block' defaultValue={data?.message}></textarea>

                    <button type='submit' className='px-5 py-1 bg-head font-bold uppercase text-white rounded-sm border-0 mt-5'>Save</button>
                </form>
            ))

        }

    </div>
);
};

export default Edit;