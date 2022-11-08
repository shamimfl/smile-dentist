import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';


const Update = () => {

    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        updateProfile({ displayName: name, photoURL: img })
        navigate('/')
    }


    

    return (
        <div className="card flex justify-center  ">
            <form onSubmit={handleUpdate} className="w-2/4 shadow-2xl bg-base-100 p-5 mx-auto mt-10">
                <div className="form-control mt-5">
                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                </div>
                <div className="form-control mt-5">
                    <input type="text" placeholder="Img URL" name='img' className="input input-bordered" />
                </div>
                <div className="form-control mt-5">
                    <button className="btn bg-head border-0">Login</button>
                </div>
            </form>
        </div>

    );
};

export default Update;