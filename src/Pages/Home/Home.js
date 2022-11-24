import React from 'react';
import CarCategory from './CarCategory/CarCategory';
import CarFeatures from './CarFeatures/CarFeatures';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = () => {
    return (
       <div>
        <HomeBanner/>
        <CarFeatures/>
        <CarCategory/>
       </div>
    );
};

export default Home;