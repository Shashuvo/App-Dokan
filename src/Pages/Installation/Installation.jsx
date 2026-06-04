import { useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router';
import InstallAppCard from '../../Components/InstallAppCard/InstallAppCard';
import NoInstallApps from '../../Components/NoInstallApps/NoInstallApps';
import { ToastContainer } from 'react-toastify';

const Installation = () => {

    const { installedIds, setInstalledIds } = useOutletContext();
    const apps = useLoaderData();
    const [sortBy, setSortBy] = useState('default');

    const installedApps = apps.filter(app => installedIds.includes(app.id));

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortBy === 'size') return a.size - b.size;
        if (sortBy === 'downloads') return b.download_count - a.download_count;
        return 0;
    });


    return (
        <div className='my-20 w-5/6 mx-auto'>
            <ToastContainer></ToastContainer>
            {/* title & description */}
            <div className='space-y-4 text-center mb-10'>
                <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* app counts & sort apps */}
            <div className='mb-10 flex justify-between'>
                <span className='text-2xl font-semibold'>{sortedApps.length} Apps Found</span>
                <span>
                    <select
                        value={sortBy}
                        onChange={e => setSortBy(e.target.value)}
                        className="select select-[#627382] text-[#627382] bg-[#F5F5F5]"
                    >
                        <option value="default">Sort By</option>
                        <option value="size">Sort By Size</option>
                        <option value="downloads">Sort By Downloads</option>
                    </select>
                </span>
            </div>
            {/* installed apps */}
            <div className='space-y-4'>
                {
                    sortedApps.length > 0 ?
                        sortedApps.map(installedApp => <InstallAppCard installedApp={installedApp} key={installedApp.id} setInstalledIds={setInstalledIds} />)
                        : <NoInstallApps />
                }
            </div>
        </div>
    );
};

export default Installation;