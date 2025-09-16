import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import Loading from './Loading';


const AllServices = () => {
    
    const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://food-service-server-nq3l8fsbw-mariums-projects-1a2166bf.vercel.app/all-services")
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
    return <Loading></Loading>;
    return (
        <section>
           <header>
            <Navbar></Navbar>
           </header>
            <div className='my-20 max-w-7xl mx-auto'>
                <h2 className="text-5xl text-green-950 font-bold mb-8 text-center">All Services</h2>
                <p className='text-xl font-bold text-center mb-10'>You can see our all services . what we are provided for ours users...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                 {
                services.map(service => (

                     <div key={service._id} className="card bg-base-100 w-96 shadow-lg shadow-gray-500">
  <figure>
    <img className='object-cover w-full h-[250px]'
      src={service.foodImg}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold text-neutral-700">
      {service.foodTitle}
    </h2>
    <p className="text-gray-600 mb-2">{service.description}</p>
     <p className="text-gray-700 font-medium mb-2">Category: {service.category}</p>
                <p className="text-gray-800 font-bold mb-4">Price: {service.price} BDT</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${service._id}`} className='btn btn-soft btn-info rounded-2xl'>See Details</Link>
    </div>
  </div>
     </div>
                ))
            }
                </div>
           
            </div>
           <footer>
            <Footer></Footer>
           </footer>
        </section>
    );
};

export default AllServices;