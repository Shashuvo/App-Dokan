import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    const [installedIds, setInstalledIds] = useState([]);

    const handleInstalledIds = (id) => {
        setInstalledIds(prev => [...prev, id]);
    };

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet context={{ installedIds, handleInstalledIds }}></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;