import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import SingleMyReview from './SingleMyReview';

const MyReviews = () => {
    const {user,myReviewRefresh,setMyReviewRefresh,logOut}=useContext(AuthContext)
    const [status,setStatus] = useState(false)
    const [reviews,setReviews] = useState([])
    
    useEffect(()=>{
        window.scrollTo(0,0)
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('HomemadeCrunch-Token')}`
            }
        })
        .then(res=>{
            if(res.status===401 || res.status===403){
                toast.error('Unauthoroized user',{autoClose:1000})
                logOut()
            }
            return res.json()
        })
        .then(data=>{
           setStatus(data.status)
           setReviews(data.data)
        }
        )
    },[myReviewRefresh])
   
    return (
        <div className='px-28 py-16'>
            {
            status?
            <div>
            {
            reviews.length>0 ?
                <div className='grid grid-cols-2 gap-10 '>
                    {
                        reviews.map(review=><SingleMyReview kay={review._id} reviewItem={review}></SingleMyReview>)
                    }
                </div> :
                <div className='bg-yellow py-10 text-center rounded-xl'>
                    <h3 className='font-semibold text-2xl capitalize'>No reviews were added</h3>
                </div>
            }
            </div> :
            <div className="w-16 h-16 m-auto border-4 border-dashed rounded-full animate-spin border-black"></div>
            }
        </div>
    );
};

export default MyReviews;