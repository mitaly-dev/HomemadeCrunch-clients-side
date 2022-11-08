import React from 'react';
import Lottie from 'lottie-react'
import food from '../../assets/LottieAnimation/food.json'
import { FaCamera, FaKey, FaMailBulk, FaUser, FaVoicemail } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AddService = () => {
    const {
        userSignIn
    } = useContext(AuthContext)
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";
  
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const {email,password} = formData
    
    // get input value
    const handleInputData=(event)=>{
        const name = event.target.name 
        const value = event.target.value 
        setFormData({...formData,[name]:value})
    }
  

    // user login
    const userSignInHandle=(event)=>{
        event.preventDefault()
        const form = event.target
        if(email && password){
            userSignIn(email,password)
            .then(result=>{
                form.reset()
                toast.success("Login successfull",{autoClose:1000})
                navigate(from,{replace:true});
            })
            .catch(error=>toast.error(error.message,{autoClose:1000}))
        }
    }


    return (
        <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWF0aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="text-center xl:flex-row">
            <div className="w-full xl:px-8 xl:w-8/12 m-auto">
              <div className="bg-yellow rounded shadow-2xl sm:p-10">
                <div className=" w-4/12 m-auto">
                    {<Lottie animationData={food} loop={true}></Lottie>}
                </div>
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Add a Service
                </h3>
                <form onSubmit={userSignInHandle}>
                  <div className="mb-1 sm:mb-2">
                    <div className='relative  mb-3'>
                        <FaMailBulk  className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                        <input
                        onBlur={handleInputData}
                        placeholder="serviceName"
                        required
                        type="email"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="serviceName"
                        name="serviceName"
                        />
                    </div>
                    <div className='relative  mb-3'>
                        <FaMailBulk  className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                        <input
                        onBlur={handleInputData}
                        placeholder="email"
                        required
                        type="email"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="email"
                        name="email"
                        />
                    </div>
                    <div className='relative  mb-3'>
                        <FaMailBulk  className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                        <input
                        onBlur={handleInputData}
                        placeholder="email"
                        required
                        type="email"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="email"
                        name="email"
                        />
                    </div>
                    <div className='relative mb-3'>
                        <FaKey className='absolute left-4 top-[30%] text-black '></FaKey>
                        <input
                        onBlur={handleInputData}
                        placeholder="password"
                        required
                        type="password"
                        className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="password"
                        name="password"
                        />
                    </div>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full py-3 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Create an account?<Link to="/register" className='font-semibold'>Register</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddService;


