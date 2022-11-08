import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../../Shared/Title';
import AddReviewModal from './AddReviewModal';
import SingleReview from './SingleReview';

const ServiceReviews = ({servicesId}) => {
    const {reviewRefresh} = useContext(AuthContext)
    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?serviceId=${servicesId}`)
        .then(res=>res.json())
        .then(data=>setReviews(data.data))
    },[reviewRefresh])
  
    return (
        <>
        {
            reviews.length>0? 
            <div className='grid grid-cols-2 gap-5 pb-16'>
            {
                reviews.map(review=><SingleReview kay={review._id} reviewItem={review}></SingleReview>)
            }
            </div> : 
            <div className='bg-yellow py-10 text-center mb-10 rounded-xl'>
                <h3 className='font-semibold text-2xl capitalize'>No reviews found</h3>
            </div>
        }
        </>
    );
};

export default ServiceReviews;