import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Advertise from '../Advertise/Advertise';
import MyProductCard from './MyProductCard';

const MyProduct = () => {

    const {user} = useContext(AuthContext)

    const [advertise , setAdvertise] = useState(false)

    

    const url = `https://used-car-website-server.vercel.app/add-product?email=${user?.email}`

    const { data: products = [], refetch } = useQuery({
        queryKey: ['add-product', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers:{
                    authorization :`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    console.log(products);


    return (
        <div>
            <h2 className='text-4xl'>My Product</h2>

            <div className="grid mb-14 pt-10 gap-8 row-gap-12 lg:grid-cols-2">
                {
                    products.map(product => <MyProductCard
                        key={product._id}
                        product={product}
                        setAdvertise={setAdvertise}
                    ></MyProductCard>)
                }
            </div>

{
    advertise && 
    <Advertise
    advertise={advertise}
    />
}


        </div>
    );
};

export default MyProduct;