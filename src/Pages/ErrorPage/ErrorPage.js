import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='flex align-middle items-center justify-center flex-wrap '>
            <div>
                <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />


                <h1 className='lg:text-6xl text-3xl text-center'>Awww.... Don't Cry</h1>
                <br />
                {error && (
                    <div>
                        <p className='text-center text-3xl'>its just a {error.status} error</p>
                        <p className='text-red-500 text-3xl mt-3 text-center'>{error.statusText || error.message}</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ErrorPage;