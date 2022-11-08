import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import SingleReview from './SingleReview';

const MyReviews = () => {
    const {user,loading}=useContext(AuthContext)
    const [reviews,setReviews] = useState([])
    
    useEffect(()=>{
        window.scrollTo(0,0)
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data.data))
    },[])
   
    return (
        <div className='grid grid-cols-3 gap-10 px-28 py-16'>
             {
                reviews.map(review=><SingleReview kay={review._id} reviewItem={review}></SingleReview>)
            }
        </div>
    );
};

export default MyReviews;