import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCarCard from './CategoryCarCard';

const CategoryCar = () => {

    const car = useLoaderData()
    console.log(car);

    return (
        <div>
            <h2 className='text-center text-4xl  font-bold p-14'>We have {car.length} cars in this category</h2>

            <div className="grid mb-14 p-10 gap-8 row-gap-12 lg:grid-cols-3">
                {
                    car.map(car => <CategoryCarCard
                        key={car._id}
                        car={car}
                    ></CategoryCarCard>)
                }
            </div>

        </div>
    );
};

export default CategoryCar;