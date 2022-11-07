import React from 'react';
import './LogIn.css'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='p-5'>
            <div className='lg:w-2/5 rounded-md mx-auto  mt-5 bg-cus-login p-5 text-center shadow relative'>

                <h1 className='mt-12 text-xl font-bold my-3'>Log In</h1>
                <div className='flex items-center bg-transparent  border-2 border-teal-900 rounded-lg overflow-hidden  gap-3'>
                    <div className='bg-teal-900 px-3 py-2'>
                        <EmailIcon className='h-10 text-white w-10' />
                    </div>
                    <input className='w-full h-full bg-transparent focus:outline-none' placeholder='Enter Your Email' type="email" name="email" id="" />
                </div>
                <div className='flex items-center  bg-transparent mt-4 border-2 border-teal-900 rounded-lg overflow-hidden  gap-3'>
                    <div className='bg-teal-900 px-3 py-2'>
                        <KeyIcon className='h-10 text-white w-10' />
                    </div>
                    <input className='w-full h-full   bg-transparent focus:outline-none' placeholder='******************' type="email" name="email" id="" />
                </div>
                <button className="btn border-0 bg-teal-900 hover:bg-teal-500 w-full mt-5">Log In</button>
                <Link className='text-end block mt-4'><button className='font-bold px-2 text-sm rounded-full text-teal-800  '>Forgotten Password ?</button></Link>
                <Link className='text-end block mt-2'><button className='font-bold px-2 text-sm rounded-full text-teal-800  '>Already Have an account ?</button></Link>
                
                <div className="divider mt-3">OR</div>

                <div className='flex justify-center gap-10 mt-3'>
                    <button className="w-2/5 btn border-0 bg-teal-900 hover:bg-teal-500"><GitHubIcon></GitHubIcon></button>
                    <button className="w-2/5 btn border-0 bg-teal-900 hover:bg-teal-500"><GoogleIcon /></button>
                </div>
                {/* <Link className='text-center  block mt-5'><button className='font-bold p-1 btn-wide  rounded-full shadow text-teal-700   border-teal-700 border-2  uppercase'>Sing Up</button></Link> */}
                {/* error  */}
                <div className='h-10  bg-red-400  absolute top-2 rounded shadow flex items-center px-5 text-white gap-5'>
                <WarningAmberIcon/>
                <p>Error ?</p>
                </div>
            </div>
                
        </div>
    );
};

export default LogIn;