import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';

const AppCard = ({ app, isTrending = false }) => {
    const { image, title, downloads, ratingAvg } = app;
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-76.5 space-y-4 hover:shadow-xl transition-all duration-300">

            {/* Image */}
            <div className="relative bg-[#D9D9D9] rounded-md h-70 overflow-hidden">
                {/* Trending Badge */}
                {isTrending && (
                    <div className="absolute flex items-center gap-1 top-3 left-2 z-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                        <IoMdRocket />
                        <span>Trending</span>
                    </div>
                )}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-medium text-[#001931] line-clamp-2">
                {title}
            </h2>

            {/* Bottom Info */}
            <div className="flex items-center justify-between">

                {/* Downloads */}
                <div className="bg-[#F1F5E8] text-[#00D390] px-2 py-1 rounded flex items-center gap-2">
                    <span><BsDownload /></span>
                    <span>{downloads}</span>
                </div>

                {/* Rating */}
                <div className="bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded flex items-center gap-2">
                    <span><FaStar /></span>
                    <span>{ratingAvg}</span>
                </div>

            </div>
        </div>
    );
};

export default AppCard;