import React from 'react';

const CarFeatures = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 row-gap-10 lg:grid-cols-4">
                    <div className="max-w-md rounded-md shadow-md p-10 sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img src="https://kitpro.site/otodeal/wp-content/uploads/sites/115/2022/09/002-steering-wheel.png" alt="" srcSet="" />
                        </div>
                        <h6 className="mb-3 lg:px-5 text-xl font-bold leading-5">Latest Cars</h6>
                        
                    </div>
                    <div className="max-w-md rounded-md shadow-md p-10 sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img src="https://kitpro.site/otodeal/wp-content/uploads/sites/115/2022/09/004-tachometer.png" alt="" srcSet="" />
                        </div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Low Odometer</h6>
                        
                    </div>
                    <div className="max-w-md rounded-md shadow-md p-10 sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img src="https://kitpro.site/otodeal/wp-content/uploads/sites/115/2022/09/035-motor.png" alt="" srcSet="" />
                        </div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Original Engine</h6>
                        
                    </div>
                    <div className="max-w-md rounded-md shadow-md p-10 sm:mx-auto sm:text-center">
                        <div className="flex items-center text-center align-middle justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img src="https://kitpro.site/otodeal/wp-content/uploads/sites/115/2022/09/001-tire.png" alt="" srcSet="" />
                        </div>
                        <h6 className="mb-3 lg:px-4  text-xl font-bold leading-5">
                        Certified Tire
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarFeatures;