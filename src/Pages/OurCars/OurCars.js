import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
import OurCarsCard from './OurCarsCard/OurCarsCard';

const OurCars = () => {
    const cars = useLoaderData()

   
    return (
        <div>
            <h2 className='text-center font-semibold text-4xl mt-24'>We have Total Total Car {cars.length} For <br />
            Sell With Defferent Model And Brands</h2>

            <div className="grid py-14 gap-8 row-gap-12 lg:grid-cols-3">
                {
                    cars.map(carBookingOption => <OurCarsCard
                        key={carBookingOption._id}
                        carBookingOption={carBookingOption}
                       
                    ></OurCarsCard>)
                }
            </div>

            <CarBookingModal
           
            ></CarBookingModal>

        </div>
    );
};

export default OurCars;