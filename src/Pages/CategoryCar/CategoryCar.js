import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FlagIteams from '../../CarDashboard/FlagIteams/FlagIteams';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
import CategoryCarCard from './CategoryCarCard';

const CategoryCar = () => {
    const car = useLoaderData()
    
    const [carModel, setcarModel] = useState({})
    const [flag, setFlag] = useState(false)

    return (
        <div>
            <h2 className='text-center text-4xl  font-bold p-14'>We have {car.length} cars in this category</h2>

            <div className="grid mb-14 p-10 gap-8 row-gap-12 lg:grid-cols-3">
                {
                    car.map(car => <CategoryCarCard
                        key={car._id}
                        car={car}
                        setcarModel={setcarModel}
                        setFlag={setFlag}
                    ></CategoryCarCard>)
                }
            </div>

            <CarBookingModal
            carModel={carModel}
            setcarModel={setcarModel}
            ></CarBookingModal>

           {
            flag &&  
            <FlagIteams
            key={flag._id}
            flag={flag}
            ></FlagIteams>
           }
           
        </div>
    );
};

export default CategoryCar;