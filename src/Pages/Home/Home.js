import React from 'react';
import ShortService from '../Services/ShortService';
import About from './About';
import Banner from './Banner';
import Gallery from './Gallery';
const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <ShortService></ShortService>
        <About></About>
        <Gallery></Gallery>
        </div>
    );
};

export default Home;