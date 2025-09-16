import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../provider/AuthContext';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TiDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [updatedData, setUpdatedData] = useState({ reviewText: "", rating: "" });

  // Load user reviews
  useEffect(() => {
    if (!user?.email) return;

    axios.get(`http://localhost:3000/my-reviews/${user.email}`)
      .then(res => setReviews(res.data))
      .catch(err => console.log(err));
  }, [user]);

  // Handle Delete
  const handleDelete = (serviceId, reviewId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/services/${serviceId}/reviews/${reviewId}`)
          .then(() => {
            setReviews(prev => prev.filter(r => r.reviewId !== reviewId));
            Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
          })
          .catch(() => Swal.fire('Error!', 'Failed to delete review.', 'error'));
      }
    });
  };

  // Handle Update
  const handleUpdate = (review) => {
    setEditingReview(review);
    setUpdatedData({ reviewText: review.reviewText, rating: review.rating });
  };

  const saveUpdate = () => {
    axios.put(
      `http://localhost:3000/services/${editingReview.serviceId}/reviews/${editingReview.reviewId}`,
      updatedData
    ).then(() => {
      setReviews(prev => prev.map(r => r.reviewId === editingReview.reviewId ? {...r, ...updatedData} : r));
      setEditingReview(null);
      Swal.fire('Success!', 'Review updated successfully', 'success');
    }).catch(() => Swal.fire('Error!', 'Failed to update review', 'error'));
  };

  if (!user) return <p className="text-center mt-10 text-red-500">Please login to see your reviews.</p>;
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="max-w-4xl mx-auto my-10 px-5">
        <h2 className="text-4xl font-bold mb-8">My Reviews</h2>

        {reviews.length === 0 ? (
          <p className="text-gray-500">You haven't submitted any reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.reviewId} className="border border-gray-400 shadow-2xl rounded-xl p-4  flex flex-col space-y-2">
                <p><strong>Service : </strong> {review.serviceTitle}</p>
                <p><strong>Review : </strong> {review.reviewText}</p>
                <p><strong>Rating : </strong> {review.rating}</p>
                <div className="flex space-x-2">
                  <button
                    className="bg-blue-900 text-white px-3 py-1 rounded-full flex justify-center items-center gap-2"
                    onClick={() => handleUpdate(review)}
                  >Update <MdOutlineTipsAndUpdates /></button>
                  <button
                    className="bg-pink-700 text-white px-3 py-1 rounded-full flex justify-center items-center gap-2"
                    onClick={() => handleDelete(review.serviceId, review.reviewId)}
                  >Delete <TiDelete size={20}/></button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Update Modal */}
        {editingReview && (
          <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-gray-300 p-6 rounded-xl w-3xl">
              <h3 className="text-xl font-bold mb-4">Update Review</h3>
              <input
                type="text"
                value={editingReview.serviceTitle}
                readOnly
                className="w-full border rounded-xl p-2 mb-3 bg-gray-100"
              />
              <textarea
                placeholder="Review Text"
                value={updatedData.reviewText}
                onChange={e => setUpdatedData({...updatedData, reviewText: e.target.value})}
                className="w-full border p-2 mb-3 rounded-xl"
              />
              <input
                type="number"
                placeholder="Rating"
                value={updatedData.rating}
                onChange={e => setUpdatedData({...updatedData, rating: e.target.value})}
                className="w-full border p-2 mb-3 rounded-xl"
              />
              <div className="flex justify-end space-x-2">
                <button className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-800  rounded-full" onClick={() => setEditingReview(null)}>Cancel</button>
                <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full" onClick={saveUpdate}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer>
        <Footer></Footer>
      </footer>
        </div>
    );
};

export default MyReviews;