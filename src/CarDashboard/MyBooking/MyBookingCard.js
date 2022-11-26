import React from 'react';
import { Link } from 'react-router-dom';
    
const MyBookingCard = ({carbooked}) => {

    const {image, phone, email, category,price, model, location} = carbooked
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-base">Car Name: {category}</h2>
                    <h2 className="text-base">Car Model : {model}</h2>
                    <h2 className="text-base">Selling Location : {location}</h2>
                    <h2 className="text-base">Your Phone : {phone}</h2>
                    <h2 className="text-base">Your Email : {email}</h2>
                    <h2 className="text-base">Car Price : {price}</h2>
                    <div className="card-actions justify-start mt-5">
                        {
                            price && !carbooked.paid && <Link to={`/dashboard/payment/${carbooked._id}`}>
                            <button className="btn btn-primary">Pay Now</button>
                            </Link>
                        }

                        {
                            price && carbooked.paid && <button className="btn btn-primary">Paid</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingCard;