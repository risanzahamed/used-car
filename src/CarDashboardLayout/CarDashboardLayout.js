import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SellerMyProduct from '../CarDashboard/AllSeller/AllSeller';
import { AuthContext } from '../Contexts/AuthContext';
import useAdmin from '../Pages/UseAdmin/UseAdmin';
import UseCustomer from '../Pages/UseCustomer/UseCustomer';
import UseSeller from '../Pages/UseSeller/UseSeller';
import Header from '../Shared/Header/Header';

const CarDashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    const [isCustomer] = UseCustomer(user?.email)
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
                        {
                            isCustomer && <li><Link to='/dashboard'>My Orders</Link></li>
                        }

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/flaged'>Flaged</Link></li>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/user/seller'>Seller</Link></li>
                                <li><Link to='/dashboard/user/customer'>Customer</Link></li>

                            </>
                        }

                        {
                            isSeller && <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/add-product'>Add A Product</Link></li>
                                <li><Link to='/dashboard/my-product'>My Product</Link></li>

                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CarDashboardLayout;