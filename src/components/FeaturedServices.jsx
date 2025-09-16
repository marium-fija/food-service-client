import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const FeaturedServices = () => {
    const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    axios.get("http://localhost:3000/services")
    .then(res => {
        setServices(res.data);
        setLoading(false);
    })
    .catch(err => {
        console.log(err);
        setLoading(false);   
    });
  }, []);

  if(loading)
    return  <p className="text-center mt-10 text-7xl">Loading...</p>;

    return (
        <section className="mt-10 py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                 <h2 className="text-5xl font-bold mb-8 text-center text-blue-950">Featured Services</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                  services.map(service => (
                    

<div key={service._id} className="max-w-sm  border border-cyan-900 rounded-lg shadow-md shadow-slate-400  dark:border-gray-100">
    <a href="#">
        <img className="rounded-t-lg w-xl object-cover h-[250px]" src={service.foodImg} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{service.foodTitle}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{service.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">Price: {service.price} BDT</p>

        <Link to={`/services/${service._id}`} className='btn btn-primary rounded-3xl'> See more <FaArrowRight /></Link>
    </div>
</div>
))}

    </div>
</div>
</section>
    );
};

export default FeaturedServices;