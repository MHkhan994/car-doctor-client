import React from 'react';

import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full bg-cover" />
                    <div className="absolute items-center ps-12 flex left-0 top-0 gap-10 bg-gradient-to-r from-[#00000071] to-[#0001] h-full w-full">
                        <div className='text-white space-y-5 w-1/2'>
                            <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-active btn-secondary me-3">Discover more</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-8 gap-10">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full bg-cover" />
                    <div className="absolute items-center ps-12 flex left-0 top-0 gap-10 bg-gradient-to-r from-[#00000071] to-[#0001] h-full w-full">
                        <div className='text-white space-y-5 w-1/2'>
                            <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-active btn-secondary me-3">Discover more</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-8 gap-10">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full bg-cover" />
                    <div className="absolute items-center ps-12 flex left-0 top-0 gap-10 bg-gradient-to-r from-[#00000071] to-[#0001] h-full w-full">
                        <div className='text-white space-y-5 w-1/2'>
                            <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-active btn-secondary me-3">Discover more</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-8 gap-10">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full bg-cover" />
                    <div className="absolute items-center ps-12 flex left-0 top-0 gap-10 bg-gradient-to-r from-[#00000071] to-[#0001] h-full w-full">
                        <div className='text-white space-y-5 w-1/2'>
                            <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-active btn-secondary me-3">Discover more</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-8 gap-10">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;