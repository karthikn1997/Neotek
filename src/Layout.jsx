import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Topbar />
            <Navbar />
            <main className="flex-grow bg-slate-200 min-h-[50vh]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
