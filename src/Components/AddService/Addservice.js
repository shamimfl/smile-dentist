import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Addservice = () => {
    // 2. [Home] service = name, image, rating, price, short description(maximum 100 characters),

    const handleAddService=(e)=>{
        e.preventDefault()
        const time = new Date()
        const fullDate = time.toLocaleTimeString()
        const fullTime = time.toLocaleDateString()
        const form = e.target;
        const name = form.name.value
        const img = form.img.value
        const price = form.price.value
        const ratings = form.ratings.value
        const description = form.description.value
        const service = {name , img, price, ratings, description, fullDate, fullTime}
        console.log(service)
        fetch('http://localhost:5000/addService',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data.acknowledged)
            if(data.acknowledged){
                toast.success('Services Added Successfully')
                form.reset()
            }
        })
    }

    useEffect(() => {
        document.title = `Add service-Dentist`
    }, [])

    return (
        <div className="hero h-[80vh] bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleAddService} className="card-body p-5">
                        <div className="form-control">
                            <input name='name' type="text" placeholder="Service Name" className="bg-slate-200 rounded w-full mt-5 p-2" />
                        </div>

                        <div className="form-control">
                            <input name='img' type="text" placeholder="Img URL" className="bg-slate-200 rounded w-full mt-5 p-2" />
                        </div>

                        <div className="form-control">
                            <input name='price' type="number" placeholder="Price" className="bg-slate-200 rounded w-full mt-5 p-2" />
                        </div>

                        <div className="form-control">
                            <input name='ratings' type="number" placeholder="Ratings" className="bg-slate-200 rounded w-full mt-5 p-2" />
                        </div>
                        <div  className="form-control">
                            <textarea name='description' type="Text" placeholder="Description" className="input h-16 input-bordered bg-slate-200 rounded w-full mt-5 p-2" />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="bg-head btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addservice;