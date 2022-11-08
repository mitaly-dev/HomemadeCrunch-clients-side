import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Title from '../../Shared/Title';
import AddReviewModal from './AddReviewModal';
import SingleReview from './SingleReview';

const ServiceReviews = () => {
    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data.data))
    },[])
    const content = {
        head:"Quick pick",
        title:"Reviews"
    }
    return (
    <div>
        <Title content={content}></Title>
        <label htmlFor="my-modal" className="btn">open modal</label>
        <div className='grid grid-cols-2 gap-5 pb-16'>
            {
                reviews.map(review=><SingleReview kay={review._id} reviewItem={review}></SingleReview>)
            }
        </div>
        <AddReviewModal></AddReviewModal>
    </div>
    );
};

export default ServiceReviews;