import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const navClass = ({ isActive }) =>
        `font-semibold transition-colors ${isActive
            ? 'bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-3 border-[#632EE3]'
            : 'text-gray-600 hover:text-[#632EE3]'
        }`;

    const links = <>
        <NavLink to="/" end className={navClass}>Home</NavLink>
        <NavLink to="/apps" className={navClass}>Apps</NavLink>
        <NavLink to="/installedApps" className={navClass}>Installation</NavLink>
    </>

    return (
        <div className='bg-white shadow-sm'>
            <div className="navbar w-full md:w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-2">
                            {links}
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={logo} alt="Logo" className='w-6 h-7' />
                        <Link to="/" className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">App Dokan</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/Shashuvo' target='_blank' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
                        <FaGithub className='w-5 h-5' /> Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;