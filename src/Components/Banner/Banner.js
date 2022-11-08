import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className='md:flex justify-center items-center  p-5 md:p-10 bg-cus'>
                <div className='text-5xl font-bold mt-5 '>
                    <h1>Your New Smile
                        <br />    Starts Here</h1>
                    <p className='text-sm w-3/4 mt-5'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-head border-0 mt-5">Get start </button>
                </div>
                <img className='md:2/4 md:h-[30rem] md: rounded-md mt-5' src="https://www.esplanademedicalcentre.com.au/wp-content/uploads/2021/04/ban01_2.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;