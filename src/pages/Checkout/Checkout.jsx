import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData()

    const { _id, price, title, img } = service
    const { user } = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service_id: _id,
            service_title: title,
            price: price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='container'>
            <form onSubmit={handleBookService} className='bg-gray-100 p-20 rounded-lg mt-16'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='due' defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn border-none bg-[#FF3811]">Confirm order</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;