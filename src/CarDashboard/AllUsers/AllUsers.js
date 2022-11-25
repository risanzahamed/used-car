import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const url = 'http://localhost:8000/users';

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    console.log(users);
    return (
        <div>
            <h2 className='text-4xl'>All Users Data</h2>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Customer</th>
                            <th>Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.customer}</td>
                                    <td>{user.seller}</td>
                                </tr>

                            </>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;