import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../provider/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TiDelete } from "react-icons/ti";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const MyServices = () => {
      const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  // Update modal state
  const [editingService, setEditingService] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  // Load user's services
  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/my-services/${user.email}`)
      .then(res => setServices(res.data))
      .catch(err => console.log(err));
  }, [user]);

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/services/${id}`)
          .then(res => {
            setServices(prev => prev.filter(s => s._id !== id));
            Swal.fire('Deleted!', 'Your service has been deleted.', 'success');
          })
          .catch(() => Swal.fire('Error!', 'Failed to delete service.', 'error'));
      }
    });
  };

  // Handle Update
  const handleUpdate = (service) => {
    setEditingService(service);
    setUpdatedData(service);
  };

  const saveUpdate = () => {
    axios.put(`http://localhost:3000/services/${editingService._id}`, updatedData)
      .then(res => {
        setServices(prev => prev.map(s => s._id === editingService._id ? updatedData : s));
        setEditingService(null);
        Swal.fire('Success!', 'Service updated successfully', 'success');
      })
      .catch(() => Swal.fire('Error!', 'Failed to update service', 'error'));
  };

  if (!user) return <p className="text-center mt-10 text-red-500">Please login to see your services.</p>;
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="max-w-7xl mx-auto my-10 px-5">
      <h2 className="text-4xl font-bold mb-8">My Services</h2>

      {services.length === 0 ? (
        <p className="text-gray-500">You haven't shared any services yet.</p>
      ) : (
        <table className="table-auto border rounded-2xl border-gray-400 w-full  shadow-2xl">
          <thead>
            <tr className="bg-blue-100">
              <th className=" px-4 py-2">Image</th>
              <th className=" px-4 py-2">Title</th>
              <th className=" px-4 py-2">Category</th>
              <th className=" px-4 py-2">Price</th>
              <th className=" px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service._id} className="text-center">
                <td className=" px-4 py-2">
                  <img src={service.foodImg} alt={service.foodTitle} className="w-20 h-20 object-cover mx-auto rounded-xl"/>
                </td>
                <td className=" px-4 py-2">{service.foodTitle}</td>
                <td className=" px-4 py-2">{service.category}</td>
                <td className=" px-4 py-2">{service.price} BDT</td>
                <td className=" px-4 py-2  ">
                  <div className='space-y-2 lg:flex gap-3 justify-center'>
                    <button
                    className="bg-purple-500 text-white p-2 flex justify-center items-center gap-2 rounded-full"
                    onClick={() => handleUpdate(service)}
                  >Update <MdOutlineTipsAndUpdates /></button>
                  <button
                    className="bg-rose-500 text-white p-2  rounded-full flex justify-center items-center gap-2"
                    onClick={() => handleDelete(service._id)}
                  >Delete <TiDelete size={20}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Update Modal */}
      {editingService && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-200 p-6 rounded w-2xl ">
            <h3 className="text-xl font-bold mb-4">Update Service</h3>
            <input
              type="text"
              placeholder="Title"
              value={updatedData.foodTitle}
              onChange={e => setUpdatedData({...updatedData, foodTitle: e.target.value})}
              className="w-full border p-2 mb-3 rounded-xl"
            />
            <input
              type="text"
              placeholder="Category"
              value={updatedData.category}
              onChange={e => setUpdatedData({...updatedData, category: e.target.value})}
              className="w-full border p-2 mb-3 rounded-xl"
            />
            <input
              type="number"
              placeholder="Price"
              value={updatedData.price}
              onChange={e => setUpdatedData({...updatedData, price: e.target.value})}
              className="w-full border p-2 mb-3 rounded-xl"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={updatedData.foodImg}
              onChange={e => setUpdatedData({...updatedData, foodImg: e.target.value})}
              className="w-full border p-2 mb-3 rounded-xl"
            />
            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-800 rounded-xl" onClick={() => setEditingService(null)}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-400 hover:bg-indigo-500 text-white rounded-xl" onClick={saveUpdate}>Save</button>
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

export default MyServices;