import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Stats from '../../Components/Stats/Stats';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appsDetails = useLoaderData();
    return (
        <div className='my-20'>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps appsDetails={appsDetails}></TrendingApps>
        </div>
    );
};

export default Home;