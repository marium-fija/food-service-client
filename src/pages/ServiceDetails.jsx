import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../provider/AuthContext';
import { useParams } from 'react-router';


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
      .get(`http://localhost:3000/services/${id}`)
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

    axios.post(`http://localhost:3000/services/${id}/reviews`, newReview)
      .then((res) => {
        if (res.data.modifiedCount > 0 || res.data.acknowledged) {
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

  if (!service) return <p className="text-center mt-10">Loading...</p>;
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
      <Link to="/browse-tips" className='btn bg-teal-800 text-white rounded-full my-8'>Back to Browse tips</Link>
    </div>
  </div>
</div>
<div>
     {/* Reviews Section */}
      <h3 className="text-xl font-bold mt-6">
        Reviews ({service.reviews?.length || 0})
      </h3>
      <div className="space-y-3 mt-3">
        {service.reviews?.map((r, i) => (
          <div key={i} className="border p-3 rounded">
            <div className="flex items-center gap-2">
              <img
                src={r.userPhoto}
                alt={r.userName}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">{r.userName}</span>
            </div>
            <Rating initialRating={r.rating} readonly emptySymbol="☆" fullSymbol="★" />
            <p>{r.reviewText}</p>
            <small className="text-gray-500">{r.reviewDate}</small>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="mt-6">
        <h4 className="font-semibold">Add Your Review</h4>
        {user ? (
          <>
            <textarea
              className="w-full border rounded p-2 mt-2"
              rows="3"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <Rating
              initialRating={rating}
              onClick={(value) => setRating(value)}
              emptySymbol="☆"
              fullSymbol="★"
            />
            <br />
            <button
              onClick={handleAddReview}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
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