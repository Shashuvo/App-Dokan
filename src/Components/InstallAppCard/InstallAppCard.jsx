import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

const InstallAppCard = ({ installedApp }) => {
    const { image, title, size, downloads, ratingAvg } = installedApp;
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">

            {/* Left Side */}
            <div className="flex items-center gap-4">

                {/* App Image */}
                <img src={image} alt="App Image" className="w-20 h-20 rounded-lg object-cover" />

                {/* App Info */}
                <div>
                    <h2 className="text-[#001931] font-medium text-xl">{title}</h2>

                    <div className="flex items-center gap-4 mt-4">

                        <div className="flex items-center gap-1 font-medium text-[#00D390]">
                            <BiDownload size={16} />
                            <span>{downloads}</span>
                        </div>

                        <div className="flex items-center gap-1 font-medium text-[#FF8811]">
                            <FaStar size={16} />
                            <span>{ratingAvg}</span>
                        </div>

                        <span className='text-[#627382]'>{size} MB</span>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button className="bg-[#00D390] hover:bg-green-500 text-white px-5 py-2 rounded-md font-medium transition">
                Uninstall
            </button>
        </div>
    );
};

export default InstallAppCard;