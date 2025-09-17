import React, { useContext } from 'react';
import AuthContext from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo (2).png';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

     const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "You have successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

     const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-500 font-semibold" : "font-medium" }> Home</NavLink>
      </li>
      <li>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-cyan-500 font-semibold" : "font-medium" }>Services</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addServices" className={({ isActive }) => isActive ? "text-cyan-500 font-semibold" : "font-medium" }> Add Service</NavLink>
          </li>
          <li>
            <NavLink to="/myServices" className={({ isActive }) => isActive ? "text-cyan-500 font-semibold" : "font-medium"}>My Services</NavLink>
             </li>
          <li>
            <NavLink to="/my-reviews" className={({ isActive }) => isActive ? "text-cyan-500 font-semibold" : "font-medium"}>My Reviews</NavLink>
             </li>
        </>
      )}
    </>
  );
    return (
            <div className=''>
           <div className="navbar bg-base-100 shadow-sm px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex items-center gap-2'>
        <img className='w-12' src={logo} alt="" />
        <h1 className='font-bold text-xl'>Yum<span className='text-cyan-500'>Bit</span></h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {!user ? (
          <div className='space-x-2'>
            <NavLink to="/login" className="btn  text-white bg-blue-400 rounded-full">
            Login 
          </NavLink>
          <NavLink to="/register" className="btn  text-white bg-indigo-400 rounded-full">
            Register 
          </NavLink>
          </div>
         ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="font-medium">{user.displayName}</p>
              </li>
              <li>
                <button onClick={handleLogout} className="btn bg-cyan-800 text-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
         )}
         
  </div>

        </div>
        </div>
    );
};

export default Navbar;