import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import useAdmin from '../Pages/UseAdmin/UseAdmin';

const AdminRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(loader || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;