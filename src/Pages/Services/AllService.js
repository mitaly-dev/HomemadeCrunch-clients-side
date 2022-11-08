import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../Shared/Title';
import ServiceItem from './ServiceItem';

const AllService = () => {
    const services = useLoaderData().data
    useEffect(()=>{
        window.scrollTo(0, 0)
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
        
       </div>
    );
};

export default AllService;