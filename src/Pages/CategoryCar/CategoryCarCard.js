import React from 'react';

const CategoryCarCard = ({car}) => {
    const {image, model , categoryName} = car
    return (
        <div>
            <div className="px-4 py-16 shadow-md rounded-md mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div>
                <div className="max-w-md sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-full mb-4 bg-indigo-50 ">
                        <img src={image} alt="" srcSet="" />
                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">Model : {model}</h6>
                    <h6 className="mb-3 text-xl font-bold leading-5">Category:  {categoryName}</h6>
                    <p className="mb-3 text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium doloremque rem
                        aperiam, eaque ipsa quae.
                    </p>
                    <label 
                    htmlFor="car-modal"
                    className="btn"
                    
                    >Book Now</label>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default CategoryCarCard;