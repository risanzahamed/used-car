import React from 'react';

const MyProductCard = ({ product, setAdvertise }) => {
    const { image, model,sellerName, name, description, sellingPrice, originalPrice, postDate, yearsOfUse, location } = product

    const handleAdvertise = e => {
        setAdvertise(product)
    }

    return (
        <div className="px-4 py-4 shadow-md rounded-md mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <button onClick={handleAdvertise} className='btn btn-primary  btn-sm mb-10'>Make This Advertised</button>
            <div>
                <div className="max-w-md sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-full mb-4 bg-indigo-50 ">
                        <img src={image} alt="" srcSet="" />
                    </div>
                    <h2 className='text-left mb-3 text-md font-semibold'>Seller Name: {sellerName}</h2>
                    <div className='flex lg:justify-between flex-wrap text-left py-4'>
                        <h6 className="mb-3 text-md font-semibold leading-5">Product Post Date : {postDate}</h6> <br />
                        <h6 className="mb-3 text-md font-semibold leading-5">Time of use : {yearsOfUse}</h6> <br />
                        <h6 className="mb-3 text-md font-semibold leading-5">Location : {location}</h6>
                    </div>
                    <h6 className="mb-3 text-xl text-left font-bold leading-5">Name:  {name}</h6>
                    <h6 className="mb-3 text-xl text-left font-bold leading-5">Model : {model}</h6>


                    <div className='flex lg:justify-between flex-wrap text-left py-4'>
                        <h6 className="mb-3 text-lg font-bold leading-5">Original Price:  {originalPrice}</h6> <br />
                        <h6 className="mb-3 text-lg font-bold leading-5">Resale Price:  {sellingPrice}</h6>
                    </div>

                    <p className="mb-3 text-left text-sm text-gray-900">
                        {description}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default MyProductCard;