import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FlagedCard from './FlagedCard';

const FlagedItemData = () => {
    const data = useLoaderData()
    console.log(data);


    return (
        <div>
            <h1 className='text-4xl'>Flaged Items</h1>

            <div className="grid mb-14 p-10 gap-8 row-gap-12 lg:grid-cols-2">
                {
                    data.map(flag => <FlagedCard
                        key={flag._id}
                        flag={flag}
                    ></FlagedCard>)
                }
            </div>
        </div>
    );
};

export default FlagedItemData;