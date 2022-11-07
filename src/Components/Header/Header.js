import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../img/logo.png'
import Loading from '../Loading/Loading';




const Header = () => {
    const [open, setOpen] = useState(false);
    const [user , loading, error] = useAuthState(auth)

    if(loading){
        return <Loading></Loading>
    }

   
    return (
        <div className='md:flex justify-between items-center bg-base-100 border-b-2  border-teal-500'>
            <div className='flex justify-between p-5 z-50'>
                <Link to='/'><img src={logo} alt='logo' /></Link>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer mt-8'>
                        <div>
                                <div className='bg-teal-500 w-5 h-1'></div>
                                <div className='bg-teal-500 w-5 h-1 mt-1'></div>
                                <div className='bg-teal-500 w-5 h-1 mt-1'></div>
                        </div>
                </div>
            </div>
            <ul className={`md:flex justify-end items-center absolute gap-5 font-bold p-5 md:static z-10 bg-base-100 w-full duration-500 ease-in ${open ? 'top-24': 'top-[-1120px]'}`}>
                <img className='h-10 w-10 rounded-full' src={user?.photoURL} alt="" />
                <Link className='text-teal-600 block ' to='/service'>Service</Link>
                {
                    user ? '' : <Link className='text-teal-600 block ' to='/review'>My Review</Link>
                }
                {
                    user ? "" : <Link className='text-teal-600 block ' to='/Addservice'>Add service</Link> 
                }
                <Link className='text-teal-600 block ' to='/portfolio'>Portfolio</Link>
                <Link className='text-teal-600 block ' to='/blogs'>Blogs</Link>
                {
                    user ? "" : <Link className='text-teal-600 block ' to='/Register'>Register</Link>
                }
                {
                    user ? <button className=' py-2 px-4 btn-warning rounded btn' to='/logout'>Logout</button> : <Link className='text-teal-600 block ' to='/login'>Login</Link>
                }

            </ul>
        </div>
    );
};

export default Header;