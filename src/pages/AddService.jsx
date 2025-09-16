import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../provider/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddService = () => {
    const {user} = useContext(AuthContext);
    const [formData, setFormData] = useState({
    foodImg: "",
    foodTitle: "",
    restaurantName: "",
    website: "",
    description: "",
    category: "",
    price: "",
    userEmail: user?.email || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://food-service-server-sigma.vercel.app/add-service", formData);

      console.log(res.data);
      
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Service added successfully",
          confirmButtonColor: "#3085d6",
        });
        e.target.reset(); 
      } else {
        console.log(res.data.message);
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.data.message || "Something went wrong!",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: err.message,
      });
    }
  };

    return (
        <div>
          <header>
            <Navbar></Navbar>
          </header>
            <section className="py-12  min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl bg-white  rounded-lg p-10">
        <h2 className="text-5xl text-indigo-900 font-bold mb-6 text-center">Add a New Service</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="foodImg"
            placeholder="Service Image URL"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="foodTitle"
            placeholder="Service Title"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="restaurantName"
            placeholder="restaurantName"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Company Website"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows="3"
            required
          ></textarea>
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          {/* user email */}
          <input type="hidden" name="userEmail" value={formData.userEmail} />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Service
          </button>
        </form>
      </div>
    </section>

    <footer>
      <Footer></Footer>
    </footer>
        </div>
    );
};

export default AddService;