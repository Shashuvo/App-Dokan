import React from 'react';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default;



const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20 text-center text-white'>
            <h1 className='font-bold text-4xl mb-10'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row gap-10 md:gap-24 justify-center'>
                <div className='flex flex-col space-y-4'>
                    <span>Total Downloads</span>
                    <span className='font-extrabold text-6xl'><CountUp start={0} end={29.6} duration={5} decimals={1}></CountUp>M</span>
                    <span>21% more than last month</span>
                </div>
                <div className='flex flex-col space-y-4'>
                    <span>Total Reviews</span>
                    <span className='font-extrabold text-6xl'><CountUp start={0} end={906} duration={5}></CountUp>K</span>
                    <span>46% more than last month</span>
                </div>
                <div className='flex flex-col space-y-4'>
                    <span>Active Apps</span>
                    <span className='font-extrabold text-6xl'><CountUp start={0} end={132} duration={5}></CountUp>+</span>
                    <span>31 more will Launch</span>
                </div>
            </div>
        </div>
    );
};

export default Stats;