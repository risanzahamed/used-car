import React, { useEffect } from 'react';
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";


const CheckoutForm = ({ carDetails }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const [proccessing, setProccessing] = useState(false);

    const { price, buyerName, phone, email, _id } = carDetails


    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://used-car-website-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);





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
            console.log('[PaymentMethod]', paymentMethod);
            setErrorMessage(' ')
        }


        setSuccess('')
        setProccessing(true)
        const { paymentIntent, error: confirmedError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email,
                        phone: phone
                    },
                },
            },
        );
        if (confirmedError) {
            setErrorMessage(confirmedError.message)
            return
        }

        if (paymentIntent.status === "succeeded") {


            const payment = {
                price,
                transectionId: paymentIntent.id,
                email,
                bookingId: _id

            }

            fetch('https://used-car-website-server.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('congrats! your payment is successfull')
                        setTransectionId(paymentIntent.id)
                    }
                })

        }
        console.log('paymetIntent', paymentIntent);
        setProccessing(false)


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
                    disabled={!stripe || !clientSecret || proccessing}>
                    Pay
                </button>
            </form>
            <h1 className='mt-4 text-red-600 font-semibold'>{errorMessage}</h1>
            {
                success && <div>
                    <h2 className='bg-green-500'>{success}</h2>
                    <h2 className='bg-green-500'>Your TransectionId :{transectionId}</h2>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;