import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './component.css';

const Layout = () => {
    const location = useLocation();
    const hideFooterPaths = ['/edit/']; 
    const shouldHideFooter = hideFooterPaths.some(path => location.pathname.includes(path));

    return (
        <div className="layout">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            {!shouldHideFooter && <Footer />}
        </div>
    );
}

export default Layout;
