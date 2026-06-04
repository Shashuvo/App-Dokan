import React, { useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { MdReviews, MdSdStorage } from 'react-icons/md';
import { useLoaderData, useOutletContext, useParams } from 'react-router';
import RatingChart from '../../Components/RatingChart/RatingChart';
import { ToastContainer, toast } from 'react-toastify';
import { addToInstalledApps } from '../../utilities/AddtoDB/AddToDB';


const AppsDetails = () => {
    const { id } = useParams();

    const [installed, setInstalled] = useState(false);

    const { setInstalledIds } = useOutletContext();

    const apps = useLoaderData();

    const app = apps.find(app => app.id === parseInt(id));

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;

    const handleInstall = () => {
        const success = addToInstalledApps(app.id, setInstalledIds); // ← save to localStorage + sync state
        if (success) {
            setInstalled(true);
            toast.success(`${title} installed successfully!`);
        }
    }



    return (
        <div className="min-h-screen my-20">
            <ToastContainer />
            <div className=" w-5/6 mx-auto flex flex-col gap-10 bg-transparent">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-10">

                    {/* Image */}
                    <div className="w-89 h-89 rounded-xl overflow-hidden">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-7">
                        {/* name & developer */}
                        <div className='flex-1 space-y-2'>
                            <h1 className="text-4xl font-bold text-[#001931]">{title}</h1>

                            <p className="text-xl text-[#627382]">
                                Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>{companyName}</span>
                            </p>
                        </div>

                        <div className="divider"></div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-10">
                            <div className="flex flex-col justify-center items-start gap-2">
                                <BiDownload size={40} className='text-[#54CF68]' />
                                <h1 className='text-[#001931]'>Downloads</h1>
                                <span className='text-4xl font-extrabold text-[#001931]'>{downloads}</span>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-2">
                                <FaStar size={40} className='text-[#FF8811]' />
                                <h1 className='text-[#001931]'>Average Ratings</h1>
                                <span className='text-4xl font-extrabold text-[#001931]'>{ratingAvg}</span>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-2">
                                <MdReviews size={40} className='text-[#9F62F2]' />
                                <h1 className='text-[#001931]'>Total Reviews</h1>
                                <span className='text-4xl font-extrabold text-[#001931]'>{reviews}</span>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-2">
                                <MdSdStorage size={40} className='text-[#632EE3]' />
                                <h1 className='text-[#001931]'>Size</h1>
                                <span className='text-4xl font-extrabold text-[#001931]'>{size} MB</span>
                            </div>
                        </div>

                        <button onClick={handleInstall} disabled={installed} className={`mt-4 ${installed ? "bg-[#627382] cursor-not-allowed" : "bg-[#00D390] hover:bg-green-600 cursor-pointer"} text-xl font-semibold text-white px-5 py-2 rounded-lg`}>
                            {installed ? "Installed" : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>

                <div className="divider"></div>

                {/* App Review Chart */}
                <RatingChart ratings={ratings}></RatingChart>

                <div className="divider"></div>

                {/* Description */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-[#001931]">Description</h2>

                    <p className="text-[#627382] text-xl whitespace-pre-line">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AppsDetails;