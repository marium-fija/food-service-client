import React from 'react';
import CountUp from 'react-countup';
import Countup from 'react-countup';
import icon1 from '../assets/review.png';
import icon2 from '../assets/partners.jpeg';
import icon3 from '../assets/Award.png';
import icon4 from '../assets/happyCustomer.jpeg';

const Counter = () => {
    const counters = [
        { title: "Reviews Posted", count: 150 , logo: icon1 },
        { title: "Restaurants Partnered", count: 320 , logo: icon2},
        { title: "Awards Won", count: 45 , logo: icon3 },
        { title: "Happy Customers", count: 1200 , logo: icon4},
    ];
    return (
        <div className='max-w-7xl mx-auto p-10'>
            <div className='w-full'>
                <h2 className='text-5xl font-bold text-center text-gray-900 mb-10'>Our Achievements</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                    {
                        counters.map((count, index) => (
                            <div key={index} className="max-w-md  p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-100 dark:border-gray-300">

                                <img className='w-20 rounded-2xl' src={count.logo} alt="" />
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{count.title}</h5>

                                <p className="mb-3 text-2xl font-extrabold text-gray-500 dark:text-gray-700"> <CountUp end={count.count} duration={200} /></p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;