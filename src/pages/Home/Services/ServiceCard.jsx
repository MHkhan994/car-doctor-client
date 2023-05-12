import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service

    return (
        <div className="card rounded-md p-6 bg-base-100 shadow-xl">
            <figure><img className='rounded-md' src={img} alt="Shoes" /></figure>
            <div className="py-6 space-y-3">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className='text-red-500 text-lg font-semibold'>Price: {price}</p>
                <Link to={`checkout/${_id}`}>Details</Link>
            </div>
        </div>
    );
};

export default ServiceCard;