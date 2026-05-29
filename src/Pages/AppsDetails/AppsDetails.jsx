import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { MdReviews, MdSdStorage } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => {
    const { id } = useParams();

    const apps = useLoaderData();

    const app = apps.find(app => app.id === parseInt(id));

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;

    const max = Math.max(...ratings.map((r) => r.value));
    return (
        <div className="min-h-screen my-20">
            <div className=" w-5/6 mx-auto bg-transparent">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-10">

                    {/* Image */}
                    <div className="w-87.5 h-87.5 rounded-xl overflow-hidden">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-7">
                        {/* name & developer */}
                        <div className='flex-1 space-y-2'>
                            <h1 className="text-3xl font-bold text-[#001931]">{title}</h1>

                            <p className="text-[#627382]">
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

                        <button className="mt-4 bg-[#00D390] text-xl font-semibold hover:bg-green-600 text-white px-5 py-2 rounded-lg">
                            Install Now ({size} MB)
                        </button>
                    </div>
                </div>

                {/* Ratings Section */}
                <div className="mt-10">
                    <h2 className="text-lg font-semibold mb-4">Ratings</h2>

                    <div className="space-y-3">
                        {ratings?.map((r, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="w-16 text-sm text-gray-600">
                                    {r.label}
                                </span>

                                <div className="flex-1 bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-orange-500 h-3 rounded-full"
                                        style={{
                                            width: `${(r.value / max) * 100}%`,
                                        }}
                                    />
                                </div>

                                <span className="text-sm text-gray-500 w-16 text-right">
                                    {r.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mt-10 space-y-4">
                    <h2 className="text-lg font-semibold">Description</h2>

                    <p className="text-gray-600 whitespace-pre-line">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AppsDetails;