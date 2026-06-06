import React from 'react';
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white py-16">
            <div className="w-5/6 mx-auto">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-14 mb-14">

                    {/* Brand */}
                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="LOGO" className='h-10 w-10' />
                            <Link to="/" className="font-bold text-2xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                App Dokan
                            </Link>
                        </div>
                        <p className='text-[#8A9BB0] text-base leading-relaxed'>
                            Effortlessly manage and track your favorite apps — install, uninstall, and organize everything in one place. Your apps, always accessible.
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest text-[#627382] font-bold mb-1">Navigate</span>
                        <NavLink to="/" end className="text-base text-[#8A9BB0] hover:text-white transition font-medium">Home</NavLink>
                        <NavLink to="/apps" className="text-base text-[#8A9BB0] hover:text-white transition font-medium">Apps</NavLink>
                        <NavLink to="/installedApps" className="text-base text-[#8A9BB0] hover:text-white transition font-medium">Installation</NavLink>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest text-[#627382] font-bold mb-1">Follow Us</span>
                        <a href="https://github.com/Shashuvo" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base text-[#8A9BB0] hover:text-white transition font-medium">
                            <FaGithub size={18} /> GitHub
                        </a>
                        <a href="https://www.facebook.com/shahariat.hossen.524" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base text-[#8A9BB0] hover:text-white transition font-medium">
                            <FaInstagram size={18} /> Instagram
                        </a>
                        <a href="https://www.instagram.com/o__shuv__o/?__pwa=1" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base text-[#8A9BB0] hover:text-white transition font-medium">
                            <FaFacebook size={18} /> Facebook
                        </a>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-[#ffffff10] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className='text-[#627382] text-sm font-medium'>© {new Date().getFullYear()} App Dokan. All rights reserved.</p>
                    <p className='text-[#627382] text-sm'>Made with ❤️ by App Dokan Team</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;