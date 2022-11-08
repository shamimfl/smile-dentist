import React from 'react';
import { toast } from 'react-toastify';

const Addservice = () => {
    // 2. [Home] service = name, image, rating, price, short description(maximum 100 characters),

    const handleAddService=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const img = form.img.value
        const price = form.price.value
        const ratings = form.ratings.value
        const description = form.description.value
        const service = {name , img, price, ratings, description}
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

    return (
        <div className="hero h-[80vh] bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddService} className="card-body">
                        <div className="form-control">
                            <input name='name' type="text" placeholder="Service Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input name='img' type="text" placeholder="Img URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input name='price' type="number" placeholder="Price" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input name='ratings' type="number" placeholder="Ratings" className="input input-bordered" />
                        </div>
                        <div  className="form-control">
                            <textarea name='description' type="Text" placeholder="Description" className="input h-16 input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addservice;