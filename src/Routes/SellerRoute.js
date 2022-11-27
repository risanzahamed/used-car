import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import useAdmin from '../Pages/UseAdmin/UseAdmin';
import UseSeller from '../Pages/UseSeller/UseSeller';

const SellerRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = UseSeller(user?.email)
    const location = useLocation();

    if(loader || isSellerLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isSeller){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRoute;