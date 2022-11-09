import React from 'react';

const LoadingPage = () => {
    return (
        <div className='bg-white min-h-screen flex items-center justify-center'>
         <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-orange-500"></div>
        </div>
    );
};

export default LoadingPage;