import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M5vi0CWY41z4WgMdFzCNybcNpfUfwr5UTGP6TwoBTs8BZJYqNdaE7fRQBULScdQ563RWNpO1Dc83gB3xXWEDQcv008unuqwyz');
console.log(stripePromise);
const Payment = () => {

    const data = useLoaderData()
    console.log(data);

    const { model, category } = data
    return (
        <div>
            <h2 className='text-4xl'>Payment</h2>
            <div className='mt-12'>
                <h2 className='text-2xl '>Car Name : {category}</h2>
                <h2 className='text-2xl mt-2'>Car Model : {model}</h2>

                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm 
                        key={data._id}
                        carDetails = {data}
                        />
                        
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;