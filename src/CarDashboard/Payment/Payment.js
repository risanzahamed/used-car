import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);


const Payment = () => {

    const data = useLoaderData()
    console.log(data);

    const navigation = useNavigation()

    if(navigation.status === "loading"){
        return <Loading/>
    }

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
                        carDetails = {data}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;