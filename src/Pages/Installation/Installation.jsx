
import { useLoaderData, useOutletContext } from 'react-router';
import InstallAppCard from '../../Components/InstallAppCard/InstallAppCard';
import NoInstallApps from '../../Components/NoInstallApps/NoInstallApps';

const Installation = () => {

    const { installedIds } = useOutletContext();

    const apps = useLoaderData();

    const installedApps = apps.filter(app => installedIds.includes(app.id));

    return (
        <div div className='my-20 w-5/6 mx-auto'>
            {/* title & description */}
            <div className='space-y-4 text-center mb-10'>
                <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* app counts & sort apps */}
            <div className='mb-10 flex justify-between'>
                <span className='text-2xl font-semibold'>{installedApps.length} Apps Found</span>
                <span>
                    <select defaultValue="Sort By Size" className="select select-[#627382] text-[#627382] bg-transparent">
                        <option>Sort By Size</option>
                        <option>Sort By Downloads</option>
                    </select>
                </span>
            </div>
            {/* installed apps */}
            <div className='space-y-4'>
                {
                   installedApps.length > 0 ?
                    installedApps.map(installedApp => <InstallAppCard installedApp={installedApp} key={installedApp.id}></InstallAppCard>)
                    : (<div>
                        <NoInstallApps></NoInstallApps>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Installation;