// src/components/Layout.js
import React from 'react';
import Navigation from './Navigation';
import '../Reports/Layout.css';

function Layout({ children }) {
    return (
        <div className="Reportlayout">
            <Navigation />
            <main>{children}</main>
        </div>
    );
}

export default Layout;