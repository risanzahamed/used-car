import React from 'react';
import HeroCar from '../../../../src/assets/hero-car.jpg'

const HomeBanner = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    <div className="flex items-center text-center lg:text-left">
                        <div className="space-y-10">
                            {/* Heading */}
                            <div>
                                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">
                                    Hurry!!!
                                </div>
                                <h2 className="lg:text-7xl lg:text-left text-4xl text-center md:text-4xl font-extrabold mb-4">
                                    BUY BEST AFFORDABLE AND LIKE <span className="text-blue-600"> NEW CARS</span>!
                                </h2>
                                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">


                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:justify-end text-blue-500">
                        <img src={HeroCar} alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;