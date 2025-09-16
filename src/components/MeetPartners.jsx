import React from 'react';
import logo1 from '../assets/KFC logo.jpeg';
import logo2 from '../assets/pizza logo.jpeg';
import logo3 from '../assets/Burger king logo.jpeg';
import logo4 from '../assets/Starbucks logo.jpeg';

const MeetPartners = () => {
  const partners = [
  {
    name: "KFC",
    logo: logo1,
    description: "Provides fried chicken and fast food options for reviews.",
  },
  {
    name: "Pizza Hut",
    logo: logo2,
    description: "Offers a variety of pizzas for taste testing and ratings.",
  },
  {
    name: "Burger King",
    logo: logo3,
    description: "Supplies classic burgers and combo meals for evaluation.",
  },
  {
    name: "Starbucks",
    logo: logo4,
    description: "Provides premium coffee and beverages for user reviews.",
  },
];
  return (
    <section className='p-12'>
      <div className='max-w-7xl mx-auto'>
    <h2 className="text-5xl font-bold mb-8 text-center text-indigo-950">Meet Our Partners</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {
      partners.map((partner, index) => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-100 dark:border-gray-300">

       <img className='w-12 rounded-2xl' src={partner.logo} alt="" />
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{partner.name}</h5>
    
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-700">{partner.description}</p>
    
</div>
      ))
    }
    </div>
      </div>
    </section>
  );
};

export default MeetPartners;