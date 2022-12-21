import React from 'react';
import featurecar from '../../../../src/assets/car.png'

const CarFeature2 = () => {
    return (
        <div>
            <div>
                <div className="bg-white lg:pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 lg:px-8 mb-12">
                    <div className="flex items-center lg:justify-end mt-6 text-blue-500">
                            <img src={featurecar} alt="" srcSet="" />
                        </div>
                        <div className="flex items-center text-center lg:text-left">
                            <div className="space-y-10">
                                {/* Heading */}
                                <div>
                                    <h2 className="lg:text-5xl  lg:text-left text-3xl text-left md:text-4xl font-extrabold mb-4">
                                        The Power of Dreams
                                    </h2>
                                    <p className='lg:pb-10 lg:pt-10 text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                    <h3 className="text-base md:text-base md:leading-relaxed font-medium text-gray-600">
                                        <div className='grid text-left lg:grid-cols-2 gap-5 mt-6'>
                                            <div>
                                                <ol>
                                                    <li>Expert DriversFast</li>
                                                    <li>booking confirmation</li>
                                                    <li>Qucik response and support</li>
                                                    <li>Free Registration</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <ol>
                                                    <li>Online documentation</li>
                                                    <li>Customer satisfaction</li>
                                                    <li>Grow your business</li>
                                                    <li>Low Rent Cost</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarFeature2;