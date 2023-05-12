import React from 'react';

const ServiceCard = ({ service }) => {

    const { title, img, price } = service

    return (
        <div className="card rounded-md p-6 bg-base-100 shadow-xl">
            <figure><img className='rounded-md' src={img} alt="Shoes" /></figure>
            <div className="py-6 space-y-3">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className='text-red-500 text-lg font-semibold'>Price: {price}</p>
            </div>
        </div>
    );
};

export default ServiceCard;