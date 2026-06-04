import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { getInstalledApps } from '../../utilities/AddtoDB/AddToDB';

const Root = () => {
    const [installedIds, setInstalledIds] = useState(() => getInstalledApps());

    const handleInstalledIds = (id) => {
        setInstalledIds(prev => [...prev, id]);
    };

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet context={{ installedIds, setInstalledIds, handleInstalledIds }}></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;