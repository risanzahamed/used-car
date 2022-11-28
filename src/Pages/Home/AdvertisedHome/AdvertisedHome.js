import React, { useEffect, useState } from 'react';
import FlagIteams from '../../../CarDashboard/FlagIteams/FlagIteams';
import CarBookingModal from '../../CarBookingModal/CarBookingModal';
import AdvertiseHomeCard from './AdvertiseHomeCard';

const AdvertisedHome = () => {

    const [carModel, setcarModel] = useState({})
    const [flag, setFlag] = useState(false)

    const [advertise, setAdvertise] = useState([])

    useEffect(() => {
        fetch('https://used-car-website-server.vercel.app/advertise')
            .then(res => res.json())
            .then(data => {
                setAdvertise(data)
            })
    }, [])
    return (
        <div className='mx-auto container'>
            {
                advertise.length > 0 ? <h2 className='text-center text-4xl font-semibold'>Advertised Product</h2> : <></>
            }
            <div className='grid  mb-14 pt-10 gap-8 row-gap-12 lg:grid-cols-3'>
                {
                    advertise.map(advertise => <AdvertiseHomeCard
                        key={advertise._id}
                        advertise={advertise}
                        setcarModel={setcarModel}
                        setFlag={setFlag}
                    ></AdvertiseHomeCard>)
                }
            </div>

            <CarBookingModal
            carModel={carModel}
            setcarModel={setcarModel}
            ></CarBookingModal>

{
            flag &&  
            <FlagIteams
            key={flag._id}
            flag={flag}
            ></FlagIteams>
           }
            
        </div>
    );
};

export default AdvertisedHome;