import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import MyBookingCard from './MyBookingCard';

const MyBooking = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    
    const url = `http://localhost:8000/car-bookings?email=${user.email}`

    const { data = [] } = useQuery({
        queryKey: ['car-bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    console.log(data)

    return (
        <div>
            <h2 className='text-4xl'>My orders</h2>

            <div className='grid lg:grid-cols-2 gap-5 mt-5 grid-cols-1'>
            {
                data.map(carbooked => <MyBookingCard
                key={carbooked.id}
                carbooked={carbooked}
                ></MyBookingCard>
                    
               )
            }
            </div>

        </div>
    );
};

export default MyBooking;