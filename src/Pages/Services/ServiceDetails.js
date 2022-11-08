import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ServiceReviews from '../Reviews/ServiceReviews';

const ServiceDetails = () => {
    const services = useLoaderData().data
    const {price,rating,image,service,_id,description} = services
  
    const ratingArray=[] 
for(let i=0;i<rating;i++){
    ratingArray.push(<FaStar className='text-yellow text-[18px]'></FaStar>)
}

    return (
        <div className='px-5 md:px-16 xl:px-28'>
           <div className=" text-gray-700 py-16">
                <div className="container grid grid-cols-12 gap-10 mx-auto">
                    <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover  lg:col-span-5 lg:h-auto">
                    <img src={image} alt="" />
                    </div>
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-7 lg:p-10 ">
                        <div className="pt-6 pb-4 space-y-2">
                            <h2 className="text-3xl font-bold">{service}</h2>
                            <h3 className="text-xl font-bold">${price}</h3>
                            <div className='flex space-x-1 pb-4'>
                                {
                                    ratingArray.map((star,index)=><span key={index}>{star}</span>)
                                }
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* review secition */}
           <ServiceReviews></ServiceReviews>
        </div>
    );
};

export default ServiceDetails;