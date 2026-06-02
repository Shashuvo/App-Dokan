import React from 'react';
import AppErrorIMG from "../../assets/App-Error.png"
import { useNavigate } from 'react-router';

const NoInstallApps = () => {
    const navigate = useNavigate();
    return (
        <div className='my-10 flex flex-col gap-4 items-center justify-center'>
            {/* image */}
            <img src={AppErrorIMG} alt="Error 404 Image" />
            {/* details */}
            <div className='space-y-2 text-center'>
                <h1 className='text-5xl font-semibold text-[#001931]'>NO APPS INSTALLED YET</h1>
                <p className='text-xl text-[#627382]'>There is no installed apps to show.  Please install apps.</p>
            </div>
            {/* navigation button */}
            <button
                onClick={() => navigate('/apps')}
                className="btn btn-outline rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-[20px] font-semibold p-6">
                Go To Apps Page!
            </button>
        </div>
    );
};

export default NoInstallApps;