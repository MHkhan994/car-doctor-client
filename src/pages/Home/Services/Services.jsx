import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='text-5xl text-center font-semibold'>Our Service Area</h1>
            <p className='pt-4 lg:mx-52 text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-7'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;