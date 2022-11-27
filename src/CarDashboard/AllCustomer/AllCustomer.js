import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCustomer = () => {

    const customer = useLoaderData()

    return (
        <div>
            <h2 className='text-4xl'>All Customer</h2>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customer.map((customer, i) => <>
                                <tr
                                key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                </tr>

                            </>)
                        }  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomer;