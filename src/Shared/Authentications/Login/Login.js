import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import useToken from '../../../jwtHook/jwtHook';

const Login = () => {

    const { Userlogin, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate()
    const [loginUserToken, setLoginUserToken] = useState('')
    const [token] = useToken(loginUserToken)
    const [errorpassword, seterrorpassword] = useState()

    if(token){
        navigate('/')
    }

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(password.length < 6){
            seterrorpassword('password should be 6 characters')
        }

        Userlogin(email, password)
            .then(result => {
                const user = result.user;
                toast.success('User login Successfully!')
                setLoginUserToken(email)
                console.log(user);
                form.reset()

            })
            .catch(error => {
                console.log(error)
                toast.error('Something was wrong! Please try again!')
                
                form.reset()
            });
    
}




const googleSignIn = () => {
    googleLogin()
        .then(result => {
            const user = result.user;
            toast('User login Successfully!')
            console.log(user);
            setLoginUserToken(user)
        })
        .catch(error => {
            console.log(error)
            toast.error('Something was wrong! Please try again!')
        });
}
return (
    <div>
        <main className="min-h-screen shadow-lg flex flex-col items-center justify-center  text-black space-y-10 py-12 px-4 sm:px-6 lg:px-8">
            <div>
                <h1 className="mt-6 text-center text-3xl font-extrabold ">Sign in to your account</h1>
                <p className="mt-2 text-center text-sm ">
                    Or
                    <Link to="/register" className="font-medium  border-b border-indigo-600"> Register a new acoount </Link>
                </p>
            </div>
            <form onSubmit={handleSignIn} className='w-96'>


                <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="email">Email Address</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="email" name="email" id="email" placeholder="Enter your Email Address" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="password">Password</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" />
                    </div>
                    <div className="flex justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <input className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div>
                            <Link className="text-indigo-600">Forgot your Password?</Link>
                        </div>
                    </div>

                    <div>
                        <button className="w-full bg-indigo-600 text-white rounded-md p-2">Sign in</button>
                    </div>
                    <p className='text-red-600 font-semibold'>{errorpassword}</p>
                    <div className="relative pb-2">
                        <div className="absolute top-0 left-0 w-full border-b"></div>
                        <div className="absolute -top-3 left-0 w-full text-center">
                            <span className="bg-white px-3 text-sm">or continue via</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 text-xl">
                        <div onClick={googleSignIn} className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-600">
                            <img className="mx-auto h-7 w-7"
                            
                             src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png" 
                             alt='' />
                        </div>
                        
                    </div>
                </div>


            </form>
        </main>
    </div>
);
};

export default Login;

