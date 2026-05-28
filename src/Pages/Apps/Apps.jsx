import React from 'react';

const Apps = () => {
    return (
        <div className='mt-20 w-5/6 mx-auto'>
            {/* title & description */}
            <div className='space-y-4 text-center mb-10'>
                <h1 className='font-bold text-5xl'>Our All Applications</h1>
                <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {/* app counts & search apps */}
            <div className='mb-10 flex justify-between'>
                <span className='text-2xl font-semibold'>(132) Apps Found</span>
                <span>
                    <label class="input text-[#627382] border-[#D2D2D2] bg-transparent">
                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        <input type="search" required placeholder="Search Apps" />
                    </label></span>
            </div>
        </div>
    );
};

export default Apps;