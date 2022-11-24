import React, { useEffect, useState } from 'react';
import CategoryCar from '../../CategoryCar/CategoryCar';
import CategoryCard from './CategoryCard';

const CarCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/car-category')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-4xl py-10'>Our Car Categories</h2>
            <div className=' mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className=" grid gap-8 row-gap-10 lg:grid-cols-3">
                    {
                        categories.map(category => <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default CarCategory;