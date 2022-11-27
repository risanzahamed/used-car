import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import useToken from '../../../jwtHook/jwtHook';

const Register = () => {
    const { createUser, updateName } = useContext(AuthContext)
    const navigate = useNavigate()
    const [createdUserEmail , setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    if(token){
        navigate('/')
    }

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const customer = form.customer.value;
        const seller = form.seller.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                saveUser(name, email, customer, seller)
                saveSeller(name, email, seller)
                saveCustomer(name, email, customer)
                toast.success('User signUp Successfully!')
                updateName(name)
                form.reset()

            })
            .catch(error => {
                console.log(error)
                toast.error('Something was wrong! Please try again!')
                form.reset()
            });
    }

    // All User Created

    const saveUser = (name, email, customer, seller) => {
        const user = { name, email, customer, seller }
        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)

            })
    }


     // Seller Created

    const saveSeller = (name, email, seller) => {
        const user = { name, email, seller }
        fetch('http://localhost:8000/seller', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                
            })
    }



     // Customer/Buyer Created

    const saveCustomer = (name, email, customer) => {
        const user = { name, email, customer }
        fetch('http://localhost:8000/customer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                
            })
    }

    

    return (
        <div>
            <div>
                <main className="min-h-screen shadow-lg flex flex-col items-center justify-center  text-black space-y-10 py-12 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h1 className="mt-6 text-center text-3xl font-extrabold ">Register a new acoount account</h1>
                        <p className="mt-2 text-center text-sm ">
                            Or
                            <Link to="/login" className="font-medium  border-b border-indigo-600"> Sign in Now </Link>
                        </p>
                    </div>
                    <form onSubmit={handleRegister} className='w-96'>

                        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-600 mb-1" for="name">Full Name</label>
                                <input className="border rounded-md bg-white px-3 py-2" type="text" name="name" id="name" placeholder="Enter your Full Name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-600 mb-1" for="email">Email Address</label>
                                <input className="border rounded-md bg-white px-3 py-2" type="email" name="email" id="email" placeholder="Enter your Email Address" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-600 mb-1" for="password">Password</label>
                                <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" />
                            </div>
                            <div className="flex-col hidden">
                                <label className="text-sm font-bold text-gray-600 mb-1" for="password">Choose Your User Type</label>
                                <div className="flex items-center space-x-2">
                                    <input  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" name="customer" value='customer' id="customer" />
                                    <label>customer</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" name="seller" id="seller" value='seller' />
                                    <label>Seller</label>
                                </div>
                            </div>

                            <div>

                                <input className='m-2' type="radio" name="customer" id="customer" value='customer'  />
                                <label htmlFor="customer">CUSTOMER</label>

                                <input className='m-2' type="radio" name="seller" id="seller" value='seller'  />
                                <label htmlFor="seller" >Seller</label>

                            </div>

                            <div className="flex justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                    <input className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" name="remember" id="remember" />
                                    <label for="remember">Remember me</label>
                                </div>
                                <div>
                                    <Link className="text-indigo-600">Forgot your Password?</Link>
                                </div>
                            </div>
                            <div>
                                <input className="w-full bg-indigo-600 text-white rounded-md p-2" type="submit" value="Register" />
                            </div>
                            <div className="relative pb-2">
                                <div className="absolute top-0 left-0 w-full border-b"></div>
                                <div className="absolute -top-3 left-0 w-full text-center">
                                    <span className="bg-white px-3 text-sm">or continue via</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 text-xl">
                                <div className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-600">
                                    <img className="mx-auto" src="https://img.icons8.com/material-rounded/24/000000/twitter.png" alt='' />
                                </div>
                                <div className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-600">
                                    <img className="mx-auto" src="https://img.icons8.com/material-rounded/24/000000/facebook.png" alt='' />
                                </div>
                                <div className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-600">
                                    <img className="mx-auto" src="https://img.icons8.com/material-rounded/24/000000/linkedin--v2.png" alt='' />
                                </div>
                            </div>
                        </div>


                    </form>

                </main>
            </div>
        </div>
    );
};

export default Register;