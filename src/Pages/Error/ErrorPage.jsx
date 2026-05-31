import React from 'react';
import ErrorIMG from "../../assets/error-404.png"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-20 flex flex-col gap-4 items-center justify-center'>
                {/* image */}
                <img src={ErrorIMG} alt="Error 404 Image" />
                {/* details */}
                <div className='space-y-2 text-center'>
                    <h1 className='text-5xl font-semibold text-[#001931]'>Oops, page not found!</h1>
                    <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
                </div>
                {/* navigation button */}
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-outline rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-[20px] font-semibold p-6">
                    Go Back!
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;