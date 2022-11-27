import React, { useEffect, useState } from 'react';

const UseSeller = email => {

    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoading, setisSellerLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:8000/users/seller/${email}`)
            .then(res => res.json())
            .then(data =>{
                setIsSeller(data?.isSeller)
                setisSellerLoading(false)
            })
        }
    },[email])
    return [isSeller, isSellerLoading]
}

export default UseSeller;