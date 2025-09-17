import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';


const LogIn = () => {
    const [error, setError] = useState("");
    const { singInUser, singInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        singInUser(email, password)
            .then(result => {
                const userInfo = {
                    email: result.user.email,
                    lastSignInTime: new Date().toISOString()
                };
                axios.patch("https://food-service-server-sigma.vercel.app/auth/login", userInfo)
                    .then(() => {
                        Swal.fire("Success!", "Login Successful!", "success");
                        navigate(location.state?.from || "/");
                    })
                    .catch(
                        () => {
                        Swal.fire("Error!", "Database update failed!", "error");
                    }
                );
            })
            .catch(() => {
                 setError("Invalid email or password!");
                Swal.fire("Error!", "Invalid email or password!", "error");
            });
    };

     const handleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName,
                    lastSignInTime: new Date().toISOString()
                };

                axios.post("https://food-service-server-sigma.vercel.app/users", userInfo)
                    .then(() => {
                        Swal.fire("Success!", "Google Login Successful!", "success");
                        navigate(location.state?.from || "/");
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Database insert failed!", "error");
                    });
            })
            .catch(() => {
                Swal.fire("Error!", "Google login failed!", "error");
            });
    };
    return (
        <div>
             <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 border border-cyan-800 shadow-2xl shadow-cyan-100 py-5">
                <h2 className="font-semibold text-3xl text-center">
                    Login your account
                </h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset text-xl">
                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            required
                        />
                        
                        {/* password  */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            required
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                        {error && <p className="text-red-400 text-xs">{error}</p>}

                        <button type="submit" className="btn bg-blue-400 text-white mt-4">
                            Login
                        </button>

                        <button
                        type="button"
                        onClick={handleGoogleLogin} 
                         className="btn bg-white text-black mt-5 border-gray-800">
                        <FcGoogle size={25}/>
                         Login with Google
                        </button>

                        <p className="font-semibold text-center pt-5">
                            Dont’t Have An Account ?{" "}
                            <Link className="text-secondary" to="/auth/register">
                                Register
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
        </div>
    );
};

export default LogIn;