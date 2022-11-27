import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSeller = () => {
    const seller = useLoaderData()

    return (
        <div>
            <h2 className='text-4xl'>All Seller</h2>

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
                            seller.map((seller, i) => <>
                                <tr
                                key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                </tr>

                            </>)
                        }  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;