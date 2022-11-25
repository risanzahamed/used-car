import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const CarDashboardLayout = () => {
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

                        <li><Link>My Orders</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CarDashboardLayout;