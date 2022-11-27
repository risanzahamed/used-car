import React, { useEffect, useState } from 'react';

const UseCustomer = email => {

    const [isCustomer, setIsCustomer] = useState(false)
    const [isCustomerLoading, setIsCustomerLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://used-car-website-server.vercel.app/users/customer/${email}`)
            .then(res => res.json())
            .then(data =>{
                setIsCustomer(data?.isCustomer)
                setIsCustomerLoading(false)
            })
        }
    },[email])
    return [isCustomer, isCustomerLoading]
}

export default UseCustomer;