import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='md:flex justify-between items-center bg-base-100 border-b-2  border-teal-500'>
            <div className='flex justify-between p-5 z-50'>
                <Link to='/'><img src={logo} alt='logo'  /></Link>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer mt-8'>
                        <div>
                                <div className='bg-teal-500 w-5 h-1'></div>
                                <div className='bg-teal-500 w-5 h-1 mt-1'></div>
                                <div className='bg-teal-500 w-5 h-1 mt-1'></div>
                        </div>
                </div>
            </div>
            <ul className={`md:flex justify-end items-center absolute gap-5 font-bold p-5 md:static z-10 bg-base-100 w-full duration-500 ease-in ${open ? 'top-24': 'top-[-1120px]'}`}>
                <Link className='text-teal-600 block ' to='/service'>Service</Link>
                <Link className='text-teal-600 block ' to='/review'>My Review</Link>
                <Link className='text-teal-600 block ' to='/Addservice'>Add service</Link>
                <Link className='text-teal-600 block ' to='/login'>Portfolio</Link>
                <Link className='text-teal-600 block ' to='/login'>Blogs</Link>
                <Link className='text-teal-600 block ' to='/Register'>Register</Link>
                <Link className='text-teal-600 block ' to='/login'>Login</Link>
                <button className='btn btn-warning' to='/logout'>Logout</button>

            </ul>
        </div>
    );
};

export default Header;