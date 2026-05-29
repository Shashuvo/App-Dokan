import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../Components/AppCard.jsx/AppCard';

const Apps = () => {
    // apps data
    const allApps = useLoaderData();

    const [searchText, setSearchText] = useState('');

    // Filter apps by title
    const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <div className='mt-20 w-5/6 mx-auto'>
            {/* title & description */}
            <div className='space-y-4 text-center mb-10'>
                <h1 className='font-bold text-5xl'>Our All Applications</h1>
                <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {/* app counts & search apps */}
            <div className='mb-10 flex justify-between'>
                <span className='text-2xl font-semibold'>({allApps.length}) Apps Found</span>
                <span>
                    <label className="input text-[#627382] border-[#D2D2D2] bg-transparent">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input
                            type="search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search Apps"
                        />
                    </label>
                </span>
            </div>
            {/* apps card */}
            <div className='grid grid-cols-4 gap-4 space-x-4 mb-20'>
                {
                    filteredApps.length > 0 ? (
                        filteredApps.map((app) => (
                            <AppCard app={app} key={app.id} />
                        ))
                    ) : (
                        <div className="col-span-4 text-center py-20">
                            <h2 className="text-5xl font-semibold text-[#627382]">
                                No App Found
                            </h2>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Apps;