import React from 'react';

const CountUp = () => {
    const counters = [
        { title: "Geviews Posted", count: 150 },
        { title: "Restaurants Partnered", count: 320 },
        { title: "Awards Won", count: 45 },
        { title: "Happy Customers", count: 1200 },
    ];
    return (
        <div className='max-w-7xl mx-auto py-10'>
           <div>
            <h2 className='text-5xl font-bold text-center text-gray-900 mb-10'>Our Achievements</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10'>
                {
      counters.map((count, index) => (
        <div key={index} className="max-w-60  p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-100 dark:border-gray-300">

       <img className='w-12 rounded-2xl' src={count.logo} alt="" />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{count.title}</h5>
    
    <p className="mb-3 text-2xl font-extrabold text-gray-500 dark:text-gray-700">{count.count}</p>
    
</div>
      ))
    }
            </div>
            </div> 
        </div>
    );
};

export default CountUp;