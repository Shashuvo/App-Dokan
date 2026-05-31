import React from 'react';
import AppErrorIMG from "../../assets/App-Error.png"

const NotFound = () => {
    return (
        <div className='my-10 flex flex-col gap-4 items-center justify-center'>
            {/* image */}
            <img src={AppErrorIMG} alt="Error 404 Image" />
            {/* details */}
            <div className='space-y-2 text-center'>
                <h1 className='text-5xl font-semibold text-[#001931]'>OPPS!! APP NOT FOUND</h1>
                <p className='text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            </div>
        </div>
    );
};

export default NotFound;