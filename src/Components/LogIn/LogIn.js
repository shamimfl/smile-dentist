import React, { useEffect } from 'react';
import './LogIn.css'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';



const LogIn = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        document.title = `Login - Dentist`
    }, [])

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleSingInWithGoogle = () => {
        signInWithGoogle()
    }

   

    if (gLoading || loading) {
        return <Loading></Loading>
    }
    

    if(user){
            const currentUser = {email: user.user.email};
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                localStorage.setItem('dentist-token', data.token)
                navigate(from, { replace: true })
            })
    }
    if(gUser){
            const currentUser = {email: gUser?.user?.email};
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                localStorage.setItem('dentist-token', data.token)
                navigate(from, { replace: true })
            })
    }




    return (
        <div className='p-5'>
            <div className='lg:w-2/5 rounded-md mx-auto  mt-5 bg-cus-login p-5 text-center shadow relative'>

                <h1 className='mt-12 text-xl font-bold my-3'>Log In</h1>




                {/* from  */}
                <form onSubmit={handleLogin}>
                    <div className='flex items-center bg-transparent  border-2 border-teal-500 rounded-lg overflow-hidden  gap-3'>
                        <div className='bg-teal-500 px-3 py-2'>
                            <EmailIcon className='h-10 text-white w-10' />
                        </div>
                        <input className='w-full h-full bg-transparent focus:outline-none' placeholder='Enter Your Email' type="email"  name="email" id="" />
                    </div>
                    <div className='flex items-center  bg-transparent mt-4 border-2 border-teal-500 rounded-lg overflow-hidden  gap-3'>
                        <div className='bg-teal-500 px-3 py-2'>
                            <KeyIcon className='h-10 text-white w-10' />
                        </div>
                        <input className='w-full h-full   bg-transparent focus:outline-none' placeholder='******************' type="password" name="password" id="" />
                    </div>
                    <button className="btn border-0 bg-teal-500 hover:bg-teal-500 w-full mt-5">Log In</button>
                </form>


                <Link className='text-end block mt-4'><button className='font-bold px-2 text-sm rounded-full text-teal-800  '>Forgotten Password ?</button></Link>
                <Link to='/Register' className='text-end block mt-2'><button className='font-bold px-2 text-sm rounded-full text-teal-800  '>New to DENTIST</button></Link>

                <div className="divider mt-3">OR</div>

                <div className='flex justify-center gap-10 mt-3'>
                    <button onClick={handleSingInWithGoogle} className="w-full btn border-0 bg-teal-500 hover:bg-teal-500"><GoogleIcon /></button>
                </div>
                {/* <Link className='text-center  block mt-5'><button className='font-bold p-1 btn-wide  rounded-full shadow text-teal-700   border-teal-700 border-2  uppercase'>Sing Up</button></Link> */}
                {/* error  */}
                <div className='absolute top-2 bg-white rounded shadow flex items-center px-5 text-red-500 gap-5'>
                    {error ? error.message : ''}
                    {gError ? gError.message : ''}
                </div>
            </div>

        </div>
    );
};

export default LogIn;