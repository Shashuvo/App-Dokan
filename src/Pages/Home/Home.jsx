import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Stats from '../../Components/Stats/Stats';
import TrendingApps from '../../Components/TrendinApps/TrendingApps';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;