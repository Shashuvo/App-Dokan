import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { getInstalledApps } from '../../utilities/AddtoDB/AddToDB';

const Root = () => {
    const [installedIds, setInstalledIds] = useState(() => getInstalledApps());


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet context={{ installedIds, setInstalledIds }}></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;