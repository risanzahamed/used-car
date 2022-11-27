import React from 'react';
import Advertise from '../../CarDashboard/Advertise/Advertise';
import AdvertisedHome from './AdvertisedHome/AdvertisedHome';
import CarCategory from './CarCategory/CarCategory';
import CarFeatures from './CarFeatures/CarFeatures';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = () => {
    return (
       <div>
        <HomeBanner/>
        <CarFeatures/>
        <CarCategory/>
        <AdvertisedHome/>
       </div>
    );
};

export default Home;