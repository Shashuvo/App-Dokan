import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const AppCard = () => {
    const app = {
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
        "title": "TaskFlow",
        "companyName": "NovaSoft",
        "id": 1,
        "description": "A productivity app for managing tasks, deadlines, and team collaboration.",
        "size": 45,
        "reviews": 12450,
        "ratingAvg": 4.6,
        "downloads": 500000,
        "ratings": [
            {
                "name": "1 star",
                "count": 220
            },
            {
                "name": "2 star",
                "count": 410
            },
            {
                "name": "3 star",
                "count": 1200
            },
            {
                "name": "4 star",
                "count": 3900
            },
            {
                "name": "5 star",
                "count": 6720
            }
        ]
    }
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-87 space-y-4 hover:shadow-xl transition-all duration-300">

            {/* Image */}
            <div className="bg-[#D9D9D9] rounded-md h-80 overflow-hidden">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-medium text-[#001931] line-clamp-2">
                {app.title}
            </h2>

            {/* Bottom Info */}
            <div className="flex items-center justify-between">

                {/* Downloads */}
                <div className="bg-[#F1F5E8] text-[#00D390] px-2 py-1 rounded flex items-center gap-2">
                    <span><BsDownload /></span>
                    <span>{app.downloads}</span>
                </div>

                {/* Rating */}
                <div className="bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded flex items-center gap-2">
                    <span><FaStar /></span>
                    <span>{app.ratingAvg}</span>
                </div>

            </div>
        </div>
    );
};

export default AppCard;