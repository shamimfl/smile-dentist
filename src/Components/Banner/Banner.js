import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className='md:flex justify-center items-center  p-5 md:p-10 bg-cus'>
                <div className='text-5xl font-bold mt-5 '>
                    <h1>Your New Smile
                        <br />    Starts Here</h1>
                    <p className='text-sm w-3/4 mt-5'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn mt-5">Get start </button>
                </div>
                <img className='md:w-2/4 md:h-96 rounded-md mt-5' src="https://img.freepik.com/free-photo/woman-patient-dentist_1303-9355.jpg?w=740&t=st=1667843364~exp=1667843964~hmac=94920dcdff9f2d90b995f656687f5006f59f48c189cb93edaaf0291ab6ac507d" alt="" />
            </div>
        </div>
    );
};

export default Banner;