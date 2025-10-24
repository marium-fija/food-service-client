import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AmbassadorApply = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://food-service-server-sigma.vercel.app/ambassador-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Your ambassador application has been submitted successfully!",
          confirmButtonColor: "#3085d6",
        });
        setFormData({ name: "", email: "", reason: "" }); 
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Could not connect to the server.",
      });
    }
  };
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Become a Food Ambassador of <h1 className='font-bold '>Yum<span className='text-cyan-500'>Bit</span></h1> 
        </h2>

        <label className="block mb-2 font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <label className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <label className="block mb-2 font-medium text-gray-700">
          Why do you want to be an Ambassador?
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          rows="4"
          className="w-full mb-6 p-2 border rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Submit Application
        </button>
      </form>
    </div>
        </div>
    );
};

export default AmbassadorApply;