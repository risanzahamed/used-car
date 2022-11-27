import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SellerMyProduct from '../CarDashboard/SellerMyProduct/SellerMyProduct';
import { AuthContext } from '../Contexts/AuthContext';
import useAdmin from '../Pages/UseAdmin/UseAdmin';
import Header from '../Shared/Header/Header';

const CarDashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    // console.log(registeredUser?.customer);


    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile max-w-screen-xl mx-auto">
                <input id="carDashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:pb-14 lg:pl-14">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="carDashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-600 text-white text-xl font-medium">
                        <li><Link to='/dashboard'>My Orders</Link></li>

                        

                        {
                            isAdmin && <>

                                <li><Link to='/dashboard/flaged'>Flaged</Link></li>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/seller'>Seller</Link></li>
                                <li><Link to='/dashboard/add-product'>Add A Product</Link></li>


                            </>
                        }

                        {/* {
                            registeredUser?.customer && <li><Link to='/dashboard/customer'>My Product</Link></li> 
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CarDashboardLayout;