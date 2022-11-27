import React, { useEffect, useState } from 'react';
import AdvertiseHomeCard from './AdvertiseHomeCard';

const AdvertisedHome = () => {

    const [advertise, setAdvertise] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/advertise')
            .then(res => res.json())
            .then(data => {
                setAdvertise(data)
            })
    }, [])
    return (
        <div className='mx-auto container'>
            <h2 className='text-center text-4xl font-semibold'>Advertised Product</h2>
            <div className='grid  mb-14 pt-10 gap-8 row-gap-12 lg:grid-cols-3'>
                {
                    advertise.map(advertise => <AdvertiseHomeCard
                        key={advertise._id}
                        advertise={advertise}
                    ></AdvertiseHomeCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedHome;