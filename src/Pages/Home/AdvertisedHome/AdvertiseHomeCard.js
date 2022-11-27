import React from 'react';

const AdvertiseHomeCard = ({ advertise,setcarModel, setFlag }) => {

    const { image, model, category, description, resalePrice, originalPrice, postDate, yearsOfUse, location } = advertise

    return (
        <div>
            {
                advertise.length < 0 ? <h2 className='text-2xl text-center'>No Advertised Product Added</h2> : 
                
                <div className="px-4 py-4 shadow-md rounded-md mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

                <div>
                    <div className="max-w-md sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-full mb-4 bg-indigo-50 ">
                            <img src={image} alt="" srcSet="" />
                        </div>
                        <div className='flex lg:justify-between flex-wrap text-left py-4'>
                            <h6 className="mb-3 text-md font-semibold leading-5">Product Post Date : {postDate}</h6> <br />
                            <h6 className="mb-3 text-md font-semibold leading-5">Time of use : {yearsOfUse}</h6> <br />
                            <h6 className="mb-3 text-md font-semibold leading-5">Location : {location}</h6>
                        </div>
                        <h6 className="mb-3 text-xl text-left font-bold leading-5">Name:  {category}</h6>
                        <h6 className="mb-3 text-xl text-left font-bold leading-5">Model : {model}</h6>


                        <div className='flex lg:justify-between flex-wrap text-left py-4'>
                            <h6 className="mb-3 text-lg font-bold leading-5">Original Price:  {originalPrice}</h6> <br />
                            <h6 className="mb-3 text-lg font-bold leading-5">Resale Price:  {resalePrice}</h6>
                        </div>

                        <p className="mb-3 text-left text-sm text-gray-900">
                            {description}
                        </p>
                    </div>
                    <div className='flex mt-10 justify-between'>
                            <label
                                htmlFor="car-modal"
                                className="btn"
                                onClick={() => setcarModel(advertise)}

                            >Book Now</label>

                            <button 
                            className='btn btn-secondary'
                            onClick={() => setFlag(advertise)}
                            >Report To Admin</button>
                        </div>
                </div>

            </div> 
            
            

            }
        </div>
    );
};

export default AdvertiseHomeCard;