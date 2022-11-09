import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar'
import LoadingPage from './LoadingPage';

const Main = () => {
  // const {loading,setLoading} = useContext(AuthContext)
  // if(loading){
  //   return 
  // }
    return (
        <div className='font-heebo'>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;