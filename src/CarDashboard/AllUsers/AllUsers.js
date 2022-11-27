import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import CarDashboardLayout from '../../CarDashboardLayout/CarDashboardLayout';

const AllUsers = () => {

    const url = 'https://used-car-website-server.vercel.app/users';

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`https://used-car-website-server.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers:{
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success('user admin successfully done')
                refetch()
            }
            
        })
    }
    
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
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <>
                                <tr
                                key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.customer}</td>
                                    <td>{user.seller}</td>
                                    <td>{user?.role !== "admin" && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-primary'>Make Admin</button> }</td>
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