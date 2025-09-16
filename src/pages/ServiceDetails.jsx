import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../provider/AuthContext';
import { Link, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Rating from 'react-rating';
import Loading from './Loading';


const ServiceDetails = () => {
    const { id } = useParams();
    console.log(id);
    
  const [service, setService] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  //  Firebase user from context
  const { user } = useContext(AuthContext);

  //  Load single service
  useEffect(() => {
    axios
      .get(`https://food-service-server-nq3l8fsbw-mariums-projects-1a2166bf.vercel.app/services/${id}`)
      .then((res) => setService(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  //  Add Review
  const handleAddReview = () => {
    if (!user) {
      Swal.fire("Error!", "You must login to add a review.", "error");
      return;
    }

    if (!reviewText || rating === 0) {
      Swal.fire("Error!", "Please write a review and give a rating.", "error");
      return;
    }

    const newReview = {
      userName: user.displayName || "Anonymous User",
      userPhoto: user.photoURL || "https://i.ibb.co/DH0XPSFZ/boy-3.jpg",
      userEmail: user.email,
      rating,
      reviewText,
      reviewDate: new Date().toLocaleDateString(),
    };

    axios.post(`https://food-service-server-nq3l8fsbw-mariums-projects-1a2166bf.vercel.app/services/${id}/reviews`, newReview)
      .then((res) => {
        if (res.data.success) {
          Swal.fire("Success!", "Review Added Successfully!", "success");
          setService((prev) => ({
            ...prev,
            reviews: [...(prev.reviews || []), newReview],
          }));
          setReviewText("");
          setRating(0);
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Something went wrong while adding review.", "error");
      });
  };

  if (!service) 
    return  <Loading></Loading>;
    return (
        <div>
             <header>
                <Navbar></Navbar>
            </header>
        <div className='max-w-7xl mx-auto my-20 px-5'> 
            <h2 className="text-5xl font-bold mb-10 text-center">Tip Detail Of <span className='text-pink-800'>{service.foodTitle}</span></h2>     
  <div className="card lg:card-side bg-base-100 shadow-lg mb-20">
  <figure>
    <img
      src={service.foodImg}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold mt-5">{service.foodTitle}</h2>
      <p className="mt-2 text-gray-600"> Category : {service.category}</p>
      <p className="mt-2">  </p>
      <p className="mt-2"> Price: {service.price} BDT </p>
      <p className="mt-5 text-gray-800">{service.description}</p>
      <p className="mt-5 text-sm text-gray-500">
        Shared by : 
      </p>
      <Link to="/services" className='btn bg-indigo-400 text-white rounded-full my-8'>Back to Service page</Link>
    </div>
  </div>
</div>
<div className='max-w-7xl mx-auto my-20 p-5'>
     {/* Reviews Section */}
     <div className='bg-gray-100 p-5 rounded-xl'>
         <h3 className="text-xl font-bold my-3">
        Reviews ( {service.reviews?.length || 0} )
      </h3>
      <div className="space-y-3 mt-3">
        {service.reviews?.map((r, i) => (
          <div key={i} className="border border-cyan-700 shadow-xl shadow-gray-300 p-3 rounded-xl">
            <div className="flex items-center gap-2">
              <img
                src={r.userPhoto}
                alt={r.userName}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">{r.userName}</span>
            </div>
            <Rating
  initialRating={r.rating}
  readonly
  emptySymbol={<span className="text-2xl text-gray-300">☆</span>}
  fullSymbol={<span className="text-2xl text-yellow-400">★</span>}
/>
            <p>{r.reviewText}</p>
            <p>{r.rating}</p>
          </div>
        ))}
      </div>
     </div>

      {/* Add Review Form */}
      <div className="bg-gray-100 p-5 rounded-xl mt-6">
        <h4 className="font-semibold">Add Your Review</h4>
        {user ? (
          <>
            <textarea
              className="w-full border rounded-xl p-2 mt-2"
              rows="3"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <Rating
  initialRating={rating}
  onChange={(value) => setRating(value)}
  emptySymbol={<span className="text-2xl text-gray-300">☆</span>}
  fullSymbol={<span className="text-2xl text-yellow-400">★</span>}
/>
            <br />
            <button
              onClick={handleAddReview}
              className="bg-indigo-500  text-white px-4 py-2 rounded-full mt-2"
            >
              Add Review
            </button>
          </>
        ) : (
          <p className="text-red-500 mt-2">
            Please login to add a review.
          </p>
        )}
      </div>
</div>
<footer>
    <Footer></Footer>
</footer>
        </div>
    );
};

export default ServiceDetails;