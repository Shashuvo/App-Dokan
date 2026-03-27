import React from 'react';
import bannerIMG from "../../assets/hero.png"
import { FcGoogle } from 'react-icons/fc';
import { FaAppStoreIos } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='w-3/4 mx-auto text-center space-y-8 flex flex-col items-center'>
            <h1 className='text-6xl font-bold text-[#001931]'>We Build <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-lg'>At App Dokan, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-2'>
                <button className='btn'><FcGoogle className='w-5 h-5' />Google Play</button>
                <button className='btn text-black'><FaAppStoreIos className='bg-linear-to-r from-[#00BFFC] to-[#0073F6] w-5 h-5 text-white' />App Store</button>
            </div>
            <img src={bannerIMG} alt="Banner Image" />
        </div>
    );
};

export default Banner;