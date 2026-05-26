
import { useNavigate } from 'react-router';
import AppCard from './AppCard';

const TrendingApps = ({ appsDetails }) => {
    const navigate = useNavigate();
    const visibleApps = appsDetails.slice(0, 8);
    return (
        <div className='mt-20 w-5/6 mx-auto '>
            {/* title and description */}
            <div className='space-y-4 text-center mb-10'>
                <h1 className='font-bold text-5xl'>Trending Apps</h1>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* app section */}
            <div className='grid grid-cols-4 gap-4 space-x-4'>
                {/* app card */}
                {
                    visibleApps.map((app) => (<AppCard app={app} key={app.id}></AppCard>))
                }
            </div>
            {appsDetails.length > 8 && (
                <div className='text-center mt-12'>
                    <button
                        onClick={() => navigate('/all-apps')}
                        className="btn btn-outline rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-[20px] font-semibold p-6">
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default TrendingApps;