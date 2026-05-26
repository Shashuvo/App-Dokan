import React from 'react';
import AppCard from './AppCard';

const TrendingApps = () => {
    return (
        <div className='mt-20 w-5/6 mx-auto '>
            {/* title and description */}
            <div className='space-y-4 text-center mb-10'>
                <h1 className='font-bold text-5xl'>Trending Apps</h1>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* app section */}
            <div className='grid grid-cols-4'>
                {/* app card */}
                <AppCard></AppCard>
            </div>
        </div>
    );
};

export default TrendingApps;