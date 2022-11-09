import React from 'react';
import './Info.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import AddIcCallIcon from '@mui/icons-material/Call';

const Info = () => {
    return (
        <div className='p-5 md:grid grid-cols-3 gap-5 '>
            <div className='bg-head p-5 rounded mt-3 flex gap-5'>
                <CalendarTodayIcon className='icon text-white mt-5 ml-5' />
                <span className='ml-5'>
                    <h1 className='text-3xl text-white'>Opening Hour</h1>
                    <h1 className='mt-2 text-white'>09:00 AM To 05:00 PM</h1>
                </span>
            </div>
            <div className='bg-head p-5 rounded mt-3 flex gap-5'>
                <EditLocationIcon className='icon text-white mt-5 ml-5' />
                <span className='ml-5'>
                    <h1 className='text-3xl text-white'>Location</h1>
                    <h1 className='mt-2 text-white'>Mirpur, Dhaka , 1230</h1>
                </span>
            </div>
            <div className='bg-head p-5 rounded mt-3 flex gap-5'>
                <AddIcCallIcon className='icon text-white mt-5 ml-5' />
                <span className='ml-5'>
                    <h1 className='text-3xl text-white'>Contact Us</h1>
                    <h1 className='mt-2 text-white'>+ 0034738964938</h1>
                </span>
            </div>

        </div>
    );
};

export default Info;