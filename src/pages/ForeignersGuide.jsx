import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const ForeignersGuide = () => {
     const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://food-service-server-sigma.vercel.app/all-services")
      .then(res => {
        console.log(res.data);
        
        setServices(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
    return (
        <div>
            <section className="py-16 px-6 md:px-16 bg-cyan-50">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-10 text-center">
        For Foreigners Visiting Bangladesh 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Food Image */}
            <img
              src={item.foodImg}
              alt={item.foodTitle}
              className="w-full h-80 object-cover"
            />

            <div className="p-5 space-y-3">
              {/* Food & Restaurant Name */}
              <div className='flex gap-3 items-center'>
                <h3 className="text-xl font-semibold text-gray-800">
                {item.foodTitle}
              </h3>
              <div className="badge badge-soft badge-primary">{item.category}</div>
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold"><strong>{item.restaurantName}</strong></span>{" "}
                - {item.location || "Bangladesh"}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm">{item.description}</p>

              {/* Reviews */}
              {item.reviews && item.reviews.length > 0 && (
                <div className="space-y-2 mt-2">
                  <h4 className="text-md  font-semibold">
                    Top Reviews :
                  </h4>
                  {item.reviews.slice(0, 2).map((rev, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <img
                        src={rev.userPhoto || "https://i.ibb.co/FLwpZs4G/girl-5.jpg"}
                        alt={rev.userName}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <p className="text-sm text-gray-600">
                        <strong>{rev.userName}</strong> : "{rev.reviewText}"
                      </p>
                    </div>
                  ))}
                </div>
                
              )}
            </div>
            <div className="card-actions justify-end p-4">
      <Link to={`/services/${item._id}`} className='btn btn-soft btn-primary rounded-2xl'>See Details</Link>
    </div>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default ForeignersGuide;