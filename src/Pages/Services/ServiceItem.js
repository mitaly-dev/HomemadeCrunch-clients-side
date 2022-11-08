import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceItem = ({serviceItem}) => {
const {rating,_id,price,service,image,description} = serviceItem

const ratingArray=[] 
for(let i=0;i<rating;i++){
    ratingArray.push(<FaStar className='text-yellow text-[15px]'></FaStar>)
}

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded text-center px-4">
         <Link to="/" >
                <img
                src={image}
                className="h-[300px] w-[300px] m-auto rounded"
                alt=""
                />
            </Link>
          <div className="py-5 ">
           <div className='flex justify-center space-x-1 pb-4'>
                {
                    ratingArray.map((star,index)=><span key={index}>{star}</span>)
                }
           </div>
            <Link
              to="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5 capitalize">{service}</p>
            </Link>
            <p className="mb-4 text-black pt-3">
              {description.length>100?description.slice(0,100)+".....":description}
            </p>
            <h3 className='text-xl font-semibold'>${price}</h3>
            <button className='bg-yellow py-3 px-7 font-semibold flex rounded-full items-center mt-5 m-auto text-[15px hover:bg-black transition ease-in-out delay-150 duration-500 hover:text-white'>View Details <FaArrowRight className='ml-2 text-[12px]'></FaArrowRight></button>
          </div>
        </div>
    );
};

export default ServiceItem;