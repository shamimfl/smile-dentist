import React, { useEffect, useState } from 'react';


import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleGoogleLogin = () => {
        signInWithGoogle()
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        document.title = `Register - Dentist`
    }, [])



    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (gUser) {
        const currentUser = { email: gUser.user.email };
        fetch('https://sarver.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('dentist-token', data.token)
                navigate(from, { replace: true })
            })

    }
    if (user) {
        const currentUser = { email: user.user.email };
        fetch('https://sarver.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('dentist-token', data.token)
            })
        navigate('/update')
    }





    return (
        <div className='p-5'>
            <div className='lg:w-2/5 rounded-md mx-auto  mt-5 bg-cus-login p-5 text-center shadow relative'>
                <h1 className='mt-12 text-xl font-bold my-3'>Sing Up</h1>



                <form onSubmit={handleCreateUser}>
                    {/* <div className='flex items-center bg-transparent  border-2 border-teal-500 rounded-lg overflow-hidden  gap-3'>
                        <div className='bg-teal-500 px-3 py-2'>
                            <Person3Icon className='h-10 text-white w-10' />
                        </div>
                        <input className='w-full h-full bg-transparent focus:outline-none' placeholder='Enter Your name' type="text" name="name" id="" />
                    </div> */}
                    <div className='flex items-center bg-transparent mt-3 border-2 border-teal-500 rounded-lg overflow-hidden  gap-3'>
                        <div className='bg-teal-500 px-3 py-2'>
                            <EmailIcon className='h-10 text-white w-10' />
                        </div>
                        <input className='w-full h-full bg-transparent focus:outline-none' placeholder='Enter Your Email' type="email" name="email" id="" />
                    </div>
                    <div className='flex items-center  bg-transparent mt-4 border-2 border-teal-500 rounded-lg overflow-hidden  gap-3'>
                        <div className='bg-teal-500 px-3 py-2'>
                            <KeyIcon className='h-10 text-white w-10' />
                        </div>
                        <input className='w-full h-full   bg-transparent focus:outline-none' placeholder='******************' type="password" name="password" id="" />
                    </div>
                    <button className="btn border-0 bg-teal-500 hover:bg-teal-500 w-full mt-5">Sing up</button>
                </form>




                <Link to='/login' className='text-end block mt-2'><button className='font-bold px-2 text-sm rounded-full text-teal-800  '>Already Have an account ?</button></Link>

                <div className="divider mt-3">OR</div>

                <div className='flex justify-center gap-10 mt-3'>
                    <button onClick={handleGoogleLogin} className="w-full btn border-0 bg-teal-500 hover:bg-teal-500"><GoogleIcon /></button>
                </div>
                {/* error  */}

                <div className='absolute top-2 bg-white rounded shadow flex items-center px-5 text-red-500 gap-5'>
                    {error ? error.message : ''}
                    {gError ? gError.message : ''}
                </div>
            </div>

        </div>
    );
};

export default Register;