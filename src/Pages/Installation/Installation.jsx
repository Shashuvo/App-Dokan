import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router';

const Installation = () => {
    const { installedIds } = useOutletContext();
    const app = useLoaderData();
    console.log(installedIds, app);
    return (
        <div div className='my-20 w-5/6 mx-auto'>
            {/* title & description */}
            <div className='space-y-4 text-center mb-10'>
                <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* app counts & sort apps */}
            <div className='mb-10 flex justify-between'>
                <span className='text-2xl font-semibold'>({1}) Apps Found</span>
                <span>
                    <select defaultValue="Sort By Size" className="select select-[#627382] text-[#627382] bg-transparent">
                        <option>Sort By Size</option>
                        <option>Sort By Downloads</option>
                    </select>
                </span>
            </div>
        </div>
    );
};

export default Installation;