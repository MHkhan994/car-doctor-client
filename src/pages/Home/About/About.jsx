import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div>
            <div className="hero mb-16 mt-16">
                <div className="hero-content items-start grid lg:grid-cols-2 gap-24">
                    <div className='relative'>
                        <img src={person} className="rounded-lg shadow-2xl" />
                        <img src={parts} className='rounded-lg w-[80%] absolute left-1/3 border-8 border-white top-1/2' alt="" />
                    </div>
                    <div className='space-y-5 pe-12'>
                        <p className='font-bold text-red-600 text-xl'>About Us</p>
                        <h1 className="text-5xl font-bold pe-20">We are qualified & of experience in this field</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary">Get more info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;