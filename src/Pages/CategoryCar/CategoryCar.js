import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCar = () => {
    const car = useLoaderData()
    console.log(car);

    
    return (
        <div>
            <h2>Category car website{car.length}</h2>
        </div>
    );
};

export default CategoryCar;