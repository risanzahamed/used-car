import React, { useEffect } from 'react';
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";


const CheckoutForm = ({ carDetails }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    const { price, buyerName, phone, email } = carDetails



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMessage(error.message)
        } else {
            setErrorMessage(' ')
        }

       

        // const {paymentIntent, confirmedError} = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //       payment_method: {
        //         card: card,
        //         billing_details: {
        //           name: buyerName,
        //           email: email,
        //           phone: phone
        //         },
        //       },
        //     },
        //   );

          

    };

    return (
        <div className='border-currents'>
            <form className='w-96 mt-14' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-4' type="submit" 
                disabled={!stripe }>
                    Pay
                </button>
            </form>
            <h1 className='mt-4 text-red-600 font-semibold'>{errorMessage}</h1>
        </div>
    );
};

export default CheckoutForm;