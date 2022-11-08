import React from 'react';
import bannerImg from '../../assets/images/bannerpng.png'
import bannerBack from '../../assets/images/bannerBackground.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative">
        <img
          src={bannerBack}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-[#282932] bg-opacity-90">
          <div className="px-4 py-5 mx-auto w-full md:px-24 lg:px-8 lg:py-5">
            <div className="lg:grid w-full grid-cols-12 items-center justify-between xl:flex-row">
              <div className="w-full col-span-4 mb-12 xl:mb-0 text-white">
                <h2 className="max-w-lg mb-6 font-sans lg:text-6xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                Express<br></br>
                <span className='text-yellow'>Home Delivery</span>
                </h2>
                <p className="max-w-xl mb-4 text-base  md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 bg-yellow px-10 py-4 rounded-full text-black"
                >
                  Learn more
                </Link>
              </div>
              <div className="w-full col-span-8 xl:px-8 ">
              <img src={bannerImg} alt="bannerImages" className='w-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;