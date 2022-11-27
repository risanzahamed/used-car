import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Advertise = ({ advertise }) => {
    const [adzvertise , setAdvertise] = useState({})
    console.log(advertise);
    const { image, model,sellerName, name, description, sellingPrice, originalPrice, postDate, yearsOfUse, location } = advertise

    const advertisCollection = {
        image,
        model,
        name,
        sellerName,
        description, 
        sellingPrice, 
        originalPrice, 
        postDate, 
        yearsOfUse, 
        location
    }

    fetch('https://used-car-website-server.vercel.app/advertise', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(advertisCollection)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Car Add Successfully for advertised')
                    console.log('inside post',data);
                    return true
                }
                else {
                    toast.success(data.message)
                }
            })

    return (
        <div>
            
        </div>
    );
};

export default Advertise;