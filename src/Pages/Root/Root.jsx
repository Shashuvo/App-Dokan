import React, { useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { getInstalledApps } from '../../utilities/AddtoDB/AddToDB';
import Loading from '../../Components/Loader/Loading';

const Root = () => {
    const [installedIds, setInstalledIds] = useState(() => getInstalledApps());

    const navigation = useNavigation();

    return (
        <div>
            {navigation.state === "loading" && (
                <div className="fixed inset-0 bg-white/70 z-50">
                    <Loading />
                </div>
            )}
            <Navbar></Navbar>
            <div>
                <Outlet context={{ installedIds, setInstalledIds }}></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;