import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowRight, FaServicestack } from 'react-icons/fa';
import Title from '../../Shared/Title';
import ServiceItem from './ServiceItem';

const ShortService = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data.data)
        })
    },[])

    const content = {
        head:"Quick pick",
        title:"Our services food"
    }
    return (
       <div className='py-6 md:py-16'>
        <Title content={content}></Title>
         <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-16 xl:px-28'>
            {
                services.map(service=><ServiceItem key={service._id} serviceItem={service}></ServiceItem>)
            }
          
        </div>
        <button className='bg-yellow py-4 px-10 font-semibold flex rounded-full items-center mt-5 m-auto text-lg'>See All <FaServicestack className='text-[13px] ml-2'></FaServicestack></button>
       </div>
    );
};

export default ShortService;