import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData()
    return (
        <div className='container'>
            <form className='bg-gray-100 p-20 rounded-lg mt-16'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <input type="text" name='name' placeholder="service name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='price' placeholder="service price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='price' placeholder="service price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='type' placeholder="service type" className="input input-bordered" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;